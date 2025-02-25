import inquirer from "inquirer";
import { COMPONENT_TYPES, DEFAULT_CLASSES, DEFAULT_PROPS } from "./constants";
import { ComponentType } from "./types";


const validateComponentName = (input: string): string | boolean => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
        return "Component name is required.";
    }
    if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(trimmedInput)) {
        return "Component name must start with a letter or underscore and contain only alphanumeric characters and underscores.";
    }
    if (trimmedInput.length > 30) {
        return "Component name must be less than 30 characters.";
    }
    return true;
};


export const promptUser = async () => {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Component name?",
            validate: validateComponentName,
        },
        {
            type: "list",
            name: "type",
            message: "Component type?",
            choices: COMPONENT_TYPES,
        },
    ]);

    const defaultClasses = DEFAULT_CLASSES[answers.type as ComponentType];

    const additionalAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "className",
            message: `TailwindCSS class name? (default: ${defaultClasses}): `,
            default: defaultClasses,
        },
        {
            type: "confirm",
            name: "isTypescript",
            message: "Generate TypeScript code? (default: false): ",
            default: false,
        }
    ]);

    return { ...answers, ...additionalAnswers };
};