import { program } from "commander";
import { promptUser } from "./utils/prompts";
import { writeComponentFile } from "./Generator";
import { ensureTailwindInstalled } from "./utils/TailwindVerification";
import { COMPONENT_TYPES, DEFAULT_TAILWIND_CLASSES } from "./utils/constants";
import { ComponentType } from "./utils/constants";

const handleGenerateCommand = (name: string, type: ComponentType, options: { class?: string; props?: string }) => {
    const className = options.class || DEFAULT_TAILWIND_CLASSES;
    const props = options.props ? options.props.split(",").map((prop) => prop.trim()) : [];
    writeComponentFile(type, name, className, props);
};

const setupCommands = () => {
    program
        .command("interactive")
        .alias("i")
        .description("Launch the interactive component generator")
        .action(async () => {
            try {
                const answers = await promptUser();
                writeComponentFile(answers.type, answers.name, answers.className, answers.props);
            } catch (error) {
                console.error("❌ Error during interactive mode:", error);
            }
        });

    program
        .command("generate <name> <type>")
        .alias("g")
        .description("Generate a component via CLI")
        .option("-c, --class <className>", `Tailwind CSS classes (default: "${DEFAULT_TAILWIND_CLASSES}")`, DEFAULT_TAILWIND_CLASSES)
        .option("-p, --props <props>", "Props (comma separated)", "")
        .action((name, type, cmdObj) => {
            try {
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