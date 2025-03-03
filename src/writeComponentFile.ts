import path from "path";
import readline from "readline";
import { generateComponentCode } from "./utils/generateComponentCode";
import { ensureDirectoryExists, ensureFileDoesNotExist, writeFile } from "./utils/fileUtils";
import { ComponentType } from "./utils/types";
import { PATHS, MESSAGES } from "./utils/config";

/**
 * Writes the component to a file.
 */
export const writeComponentFile = (
    type: ComponentType,
    name: string,
    className: string,
    isTypescript: boolean,
): void => {
    try {
        console.log("\n" + MESSAGES.GENERATING_COMPONENT(name, type));

        const componentCode = generateComponentCode(type, name, className, isTypescript);

        ensureDirectoryExists(PATHS.COMPONENTS_DIR);

        const fileExtension = isTypescript ? "tsx" : "jsx";
        const filePath = path.join(PATHS.COMPONENTS_DIR, `${name}.${fileExtension}`);

        if (ensureFileDoesNotExist(filePath)) {
            writeFile(filePath, componentCode);
            console.log("\n" + MESSAGES.COMPONENT_GENERATED(name, type, filePath));
        } else {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(`The file ${filePath} already exists. \nDo you want to overwrite it? (yes/no): (Default: no) `, (answer) => {
                const normalizedAnswer = answer.trim().toLowerCase();
                if (normalizedAnswer === 'y' || normalizedAnswer === 'yes') {
                    writeFile(filePath, componentCode);
                    console.log("\n" + MESSAGES.COMPONENT_GENERATED(name, type, filePath));
                } else {
                    console.log("\n" + MESSAGES.COMPONENT_NOT_OVERWRITTEN(name, type, filePath));
                }
                rl.close();
            });
        }

        if (isTypescript) {
            console.log("\n" + MESSAGES.TYPESCRIPT_REMINDER);
        }
    } catch (error) {
        console.error(
            "\n" + MESSAGES.ERROR_GENERATING_COMPONENT(error instanceof Error ? error.message : String(error)),
        );
    }
};