import { program } from "commander";
import { promptUser } from "./utils/prompts";
import { writeComponentFile } from "./Generator";
import { ensureTailwindInstalled } from "./utils/TailwindVerification";
import { ComponentType } from "./utils/types";
import {DEFAULT_CLASSES} from "./utils/constants";

const handleGenerateCommand = (name: string, type: ComponentType, options: { class?: string }) => {
    const className = options.class || "";
    writeComponentFile(type, name, className);
};

const setupCommands = () => {
    program
        .command("interactive")
        .alias("i")
        .description("Launch the interactive component generator")
        .action(async () => {
            try {
                const answers = await promptUser();
                writeComponentFile(answers.type, answers.name, answers.className);
            } catch (error) {
                console.error("❌ Error during interactive mode:", error);
            }
        });

    program
        .command("generate <name> <type>")
        .alias("g")
        .description("Generate a component via CLI")
        .option("-c, --class <className>", "Tailwind CSS classes", "")
        .action((name: string, type: ComponentType, cmdObj: { class?: string }) => {
            try {
                if (cmdObj.class === "") {
                    cmdObj.class = DEFAULT_CLASSES[type];
                }
                handleGenerateCommand(name, type, cmdObj);
            } catch (error) {
                console.error("❌ Error during component generation:", error);
            }
        });


    program
        .option("-h, --help", "Display help for command")
        .action(() => {
            program.help();
        });
};

const main = async () => {
    try {
        await ensureTailwindInstalled();
        setupCommands();
        program.parse(process.argv);
    } catch (error) {
        console.error("❌ An error occurred:", error);
        process.exit(1);
    }
};

main();