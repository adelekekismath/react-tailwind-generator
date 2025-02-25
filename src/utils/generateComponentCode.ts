import { componentTemplates } from "../templates/ComponentTemplates";
import { ComponentType } from "./types";
import { MESSAGES } from "./config";

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
        throw new Error(MESSAGES.UNKNOWN_COMPONENT_TYPE(type));
    }
    return !isTypescript 
            ? template.generate(name, className) 
            : template.generateTs(name, className);
};