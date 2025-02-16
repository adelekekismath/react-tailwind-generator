import { program } from "commander";
import inquirer from "inquirer";
import { writeComponentFile } from "./src/generator";

const promptUser = async () => {

    const answers = await inquirer.prompt([
        { type: "input", name: "name", message: "Component name ?" },
        { type: "list", name: "type", message: "Component type ?", choices: ["button", "card", "modal", "input"] },
        { type: "input", name: "className", message: "TailwindCSS class name ?" },
        { type: "input", name: "props", message: "Props (comma separated or leave empty): ?" }
    ]);
    writeComponentFile(answers.type, answers.name, answers.className, answers.props.split(","));
};

program
    .command("interactive")
    .description("Launch the interactive component generator")
    .action(promptUser);


program
    .command("generate <name> <type>")
    .description("Generate a component via CLI")
    .option("-c, --class <className>", "Tailwind CSS classes", "p-4 bg-gray-100 rounded-lg")
    .option("-p, --props <props>", "Props (comma separated)", "")
    .action((name, type, cmdObj) => {
        const { class: className, props } = cmdObj;
        writeComponentFile(type, name, className, props.split(","));
    });


program.parse(process.argv);