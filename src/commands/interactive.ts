import { Command } from "commander";
import { promptUser } from "../utils/prompts";
import { writeComponentFile } from "../writeComponentFile";

export const setupInteractiveCommand = (program: Command) => {
    program
        .command("interactive")
        .alias("i")
        .description("Launch the interactive component generator")
        .action(async () => {
            try {
                const answers = await promptUser();
                writeComponentFile(answers.type, answers.name, answers.className, answers.isTypescript);
            } catch (error) {
                console.error("❌ Error during interactive mode:", error);
            }
        });
};