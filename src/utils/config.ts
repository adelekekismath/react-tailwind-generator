import path from 'path';

export const PATHS = {
    COMPONENTS_DIR: path.join(process.cwd(), "src", "components"),
};

export const MESSAGES = {
    GENERATING_COMPONENT: (name: string, type: string) => 
        `🛠 Generating component ${name} of type ${type}...`,

    COMPONENT_GENERATED: (name: string, type: string, filePath: string) =>
        `✅ Component ${name} of type ${type} generated at ${filePath}`,
    
    TYPESCRIPT_REMINDER: 
        "❗ Please remember to enable JSX support in tsconfig.json file to use this component in a TypeScript project.",

    ERROR_GENERATING_COMPONENT: (error: string) => 
        `❌ Error generating component: ${error}`,

    FILE_EXISTS_ERROR: (filePath: string) => 
        `File already exists: ${filePath}`,

    UNKNOWN_COMPONENT_TYPE: (type: string) => 
        `Unknown component type: ${type}`,

    COMPONENT_NOT_OVERWRITTEN: (name: string, type: string, filePath: string) => 
        `❌ Component ${name} of type ${type} not overwritten at ${filePath}`,
};