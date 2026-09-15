import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WORK_DIRECTORY = path.join(process.cwd(), "content", "work");
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export type WorkEntry = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  postPage: boolean;
  isBlog: boolean;
  body: string;
};

function metadataError(fileName: string, message: string): Error {
  return new Error(`Invalid work metadata in "${fileName}": ${message}`);
}

function readTitle(data: Record<string, unknown>, fileName: string): string {
  if (typeof data.title !== "string" || data.title.trim() === "") {
    throw metadataError(fileName, '"title" is required and must be a non-empty string.');
  }

  return data.title.trim();
}

function readDate(data: Record<string, unknown>, fileName: string): string {
  const value = data.date;
  let date: string;

  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) {
      throw metadataError(fileName, '"date" must use the YYYY-MM-DD format.');
    }

    date = value.toISOString().slice(0, 10);
  } else if (typeof value === "string") {
    date = value.trim();
  } else {
    throw metadataError(fileName, '"date" is required and must use the YYYY-MM-DD format.');
  }

  const parsedDate = new Date(`${date}T00:00:00Z`);
  if (
    !DATE_PATTERN.test(date) ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== date
  ) {
    throw metadataError(fileName, '"date" must use the YYYY-MM-DD format.');
  }

  return date;
}

function readOptionalString(
  data: Record<string, unknown>,
  key: "image" | "imageAlt" | "link",
  fileName: string,
): string | undefined {
  const value = data[key];

  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value !== "string") {
    throw metadataError(fileName, `"${key}" must be a string when provided.`);
  }

  const trimmedValue = value.trim();
  return trimmedValue === "" ? undefined : trimmedValue;
}

function readOptionalBoolean(
  data: Record<string, unknown>,
  key: "postPage" | "isBlog",
  fileName: string,
): boolean {
  if (data[key] === undefined) {
    return false;
  }

  if (typeof data[key] !== "boolean") {
    throw metadataError(fileName, `"${key}" must be a boolean when provided.`);
  }

  return data[key];
}

function readWorkEntry(fileName: string): WorkEntry {
  const filePath = path.join(WORK_DIRECTORY, fileName);
  const parsedFile = matter(fs.readFileSync(filePath, "utf8"));
  const data = parsedFile.data as Record<string, unknown>;

  return {
    slug: path.basename(fileName, path.extname(fileName)),
    title: readTitle(data, fileName),
    date: readDate(data, fileName),
    image: readOptionalString(data, "image", fileName),
    imageAlt: readOptionalString(data, "imageAlt", fileName),
    link: readOptionalString(data, "link", fileName),
    postPage: readOptionalBoolean(data, "postPage", fileName),
    isBlog: readOptionalBoolean(data, "isBlog", fileName),
    body: parsedFile.content.trim(),
  };
}

export function getWorkEntries(): WorkEntry[] {
  if (!fs.existsSync(WORK_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(WORK_DIRECTORY, { withFileTypes: true })
    .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === ".md")
    .map((entry) => readWorkEntry(entry.name))
    .sort((left, right) => {
      const dateOrder = right.date.localeCompare(left.date);
      return dateOrder === 0 ? left.slug.localeCompare(right.slug) : dateOrder;
    });
}

export function getPostEntries(isBlog: boolean): WorkEntry[] {
  return getWorkEntries().filter(
    (entry) => entry.postPage && entry.isBlog === isBlog,
  );
}

export function getPostEntry(
  slug: string,
  isBlog: boolean,
): WorkEntry | undefined {
  return getPostEntries(isBlog).find((entry) => entry.slug === slug);
}
