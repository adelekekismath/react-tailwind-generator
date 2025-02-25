import fs from "fs";
import path from "path";
import { componentTemplates } from "./ComponentTemplates";
import { ComponentType } from "./utils/types";


/**
 * Generates the code for a React/Tailwind component as a string.
 */
export const generateComponentCode = (
    type: ComponentType,
    name: string,
    className: string,
    isTypescript = false,
): string => {
    const template = componentTemplates[type];
    if (!template) {
        throw new Error(`Unknown component type: ${type}`);
    }
    return !isTypescript ? template.generate(name, className): template.generateTs(name, className);
};

/**
 * Ensures that the directory exists, creates it if it doesn't.
 */
const ensureDirectoryExists = (dir: string): void => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

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
        console.log(`🛠 Generating component ${name} of type ${type}...`);
        const componentCode = generateComponentCode(type, name, className , isTypescript);
        const componentsDir = path.join(process.cwd(), "src", "components");
        ensureDirectoryExists(componentsDir);

        const filePath = !isTypescript ? path.join(componentsDir, `${name}.jsx`) : path.join(componentsDir, `${name}.tsx`);
        fs.writeFileSync(filePath, componentCode);
        console.log(`✅ Component ${name} of type ${type} generated at ${filePath}`);
        if(isTypescript){
            console.log(`❗Please remember to enables JSX support in tsconfig.json file to use this component in a TypeScript project`);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(`❌ Error generating component: ${error.message}`);
        } else {
            console.error(`❌ Error generating component: ${error}`);
        }
    }
};