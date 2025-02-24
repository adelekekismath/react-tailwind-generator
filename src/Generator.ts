import fs from "fs";
import path from "path";
import { componentTemplates } from "./ComponentTemplates";


type ComponentType = "button" | "card" | "modal" | "input" | "navbar" | "alert" | "dropdown" | "badge" | "avatar" | "footer" | "dropdown";

/**
 * Generates the code for a React/Tailwind component as a string.
 */
export const generateComponentCode = (
    type: ComponentType,
    name: string,
    className: string,
    props: string[] = []
): string => {
    const template = componentTemplates[type];
    if (!template) {
        throw new Error(`Unknown component type: ${type}`);
    }
    return template.generate(name, className, props);
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
    props: string[] = []
): void => {
    try {
        const componentCode = generateComponentCode(type, name, className, props);
        const componentsDir = path.join(process.cwd(), "src", "components");
        ensureDirectoryExists(componentsDir);
        const filePath = path.join(componentsDir, `${name}.jsx`);
        fs.writeFileSync(filePath, componentCode);
        console.log(`✅ Component ${name} of type ${type} generated at ${filePath}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`❌ Error generating component: ${error.message}`);
        } else {
            console.error(`❌ Error generating component: ${error}`);
        }
    }
};