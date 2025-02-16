import fs from "fs";
import path from "path";
import { componentTemplates } from "./componentTemplates";

/**
 * Generates the code for a React/Tailwind component as a string.
 */
export const generateComponentCode = (
  type: string,
  name: string,
  className: string,
  props?: string[]
) => {
  if (!componentTemplates[type]) {
    throw new Error(`Unknown component type: ${type}`);
  }
  return componentTemplates[type].generate(name, className, props);
};

/**
 * Writes the component to a file.
 */
export const writeComponentFile = (
  type: string,
  name: string,
  className: string,
  props?: string[]
) => {
    
    
  try {
    const componentCode = generateComponentCode(type, name, className, props);
    const dir = path.join(process.cwd(), "./src/components");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const filePath = path.join(dir, `${name}.jsx`);
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