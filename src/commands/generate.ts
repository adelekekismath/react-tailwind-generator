import { Command } from "commander";
import { writeComponentFile } from "../writeComponentFile";
import { ComponentType } from "../utils/types";
import { DEFAULT_CLASSES, DEFAULT_PATH } from "../utils/constants";

const handleGenerateCommand = (name: string, type: ComponentType, options: { class?: string, typescript?: boolean, path?: string }) => {
    const className = options.class || DEFAULT_CLASSES[type] || "";
    const isTypeScript = options.typescript || false;
    const compoonentPath = options.path || DEFAULT_PATH;
    writeComponentFile(type, name, className, isTypeScript, compoonentPath);
};

export const setupGenerateCommand = (program: Command) => {
    program
        .command("generate <name> <type>")
        .alias("g")
        .description("Generate a component via CLI")
        .option("-c, --class <className>", "Tailwind CSS classes", "")
        .option("-t, --typescript", "Generate TypeScript code")
        .option("-p, --path <path>", "Path to generate the component", DEFAULT_PATH)
        .action((name: string, type: ComponentType, cmdObj: { class?: string, typescript?: boolean, path?: string }) => {
            try {
                handleGenerateCommand(name, type, cmdObj);
            } catch (error) {
                console.error("❌ Error during component generation:", error);
            }
        });
};