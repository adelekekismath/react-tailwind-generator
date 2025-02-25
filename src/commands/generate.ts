import { Command } from "commander";
import { writeComponentFile } from "../writeComponentFile";
import { ComponentType } from "../utils/types";
import { DEFAULT_CLASSES } from "../utils/constants";

const handleGenerateCommand = (name: string, type: ComponentType, options: { class?: string, typescript?: boolean }) => {
    const className = options.class || DEFAULT_CLASSES[type] || "";
    const isTypeScript = options.typescript || false;
    writeComponentFile(type, name, className, isTypeScript);
};

export const setupGenerateCommand = (program: Command) => {
    program
        .command("generate <name> <type>")
        .alias("g")
        .description("Generate a component via CLI")
        .option("-c, --class <className>", "Tailwind CSS classes", "")
        .option("-t, --typescript", "Generate TypeScript code")
        .action((name: string, type: ComponentType, cmdObj: { class?: string, typescript?: boolean }) => {
            try {
                handleGenerateCommand(name, type, cmdObj);
            } catch (error) {
                console.error("❌ Error during component generation:", error);
            }
        });
};