import fs from "fs";
import { MESSAGES } from "./config";

/**
 * Ensures that the directory exists, creates it if it doesn't.
 */
export const ensureDirectoryExists = (dir: string): void => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

/**
 * Ensures that the file does not exist.
 */
export const ensureFileDoesNotExist = (filePath: string): boolean => {
    return !fs.existsSync(filePath)
};

/**
 * Writes content to a file.
 */
export const writeFile = (filePath: string, content: string): void => {
  fs.writeFileSync(filePath, content);
};