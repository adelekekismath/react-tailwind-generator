import fs from "fs";
import path from "path";

const componentTemplates: Record<string, (name: string, className: string, props?: string[]) => string> = {
    button: (name, className, props = []) => {
        const propsDeclaration = props.map((prop) => `${prop}?: any`).join("; ");
        const propsUsage = props.map((prop) => `{${prop} && <span>{${prop}}</span>}`).join("");

        return `
            import React from "react";

            export const ${name} = ({ children, onClick, ${props.join(", ")} }: { 
            children: React.ReactNode; 
            onClick?: () => void; 
            ${propsDeclaration} 
            }) => {
            return (
                <button className="${className}" onClick={onClick}>
                {children}
                ${propsUsage}
                </button>
            );
            };
        `;
    },

    card: (name, className, props = []) => {
        const propsDeclaration = props.map((prop) => `${prop}?: any`).join("; ");
        const propsUsage = props.map((prop) => `{${prop} && <span>{${prop}}</span>}`).join("");

        return `
            import React from "react";

            export const ${name} = ({ children, ${props.join(", ")} }: { 
            children: React.ReactNode; 
            ${propsDeclaration} 
            }) => {
            return (
                <div className="${className} p-4 shadow-md rounded-lg">
                {children}
                ${propsUsage}
                </div>
            );
            };
        `;
    },

    modal: (name, className, props = []) => {
        const propsDeclaration = [
            "isOpen: boolean",
            ...props.map((prop) => `${prop}?: any`),
        ].join("; ");
        const propsUsage = props.map((prop) => `{${prop} && <span>{${prop}}</span>}`).join("");

        return `
            import React from "react";

            export const ${name} = ({ children, isOpen, ${props.join(", ")} }: { 
            children: React.ReactNode; 
            ${propsDeclaration} 
            }) => {
            if (!isOpen) return null;
            return (
                <div className="fixed inset-0 flex items-center justify-center ${className}">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {children}
                    ${propsUsage}
                </div>
                </div>
            );
            };
        `;
    },

    navbar: (name, className, props = []) => {
        const propsDeclaration = props.map((prop) => `${prop}?: any`).join("; ");
        const propsUsage = props.map((prop) => `{${prop} && <span>{${prop}}</span>}`).join("");

        return `
            import React from "react";

            export const ${name} = ({ children, ${props.join(", ")} }: { 
            children: React.ReactNode; 
            ${propsDeclaration} 
            }) => {
            return (
                <nav className="${className} bg-gray-800 text-white p-4">
                {children}
                ${propsUsage}
                </nav>
            );
            };
        `;
    },

    input: (name, className, props = []) => {
        const propsDeclaration = [
            "placeholder: string",
            ...props.map((prop) => `${prop}?: any`),
        ].join("; ");
        const propsUsage = props.map((prop) => `{${prop} && <span>{${prop}}</span>}`).join("");

        return `
            import React from "react";

            export const ${name} = ({ placeholder, ${props.join(", ")} }: { 
            placeholder: string; 
            ${propsDeclaration} 
            }) => {
            return (
                <input className="${className}" placeholder={placeholder} />
            );
            };
        `;
    },
};

/**
 * Génère le code d'un composant React/Tailwind sous forme de string.
 */
export const generateComponentCode = (
    type: string,
    name: string,
    className: string
) => {
    return componentTemplates[type](name, className);
};

/**
 * Écrit le composant dans un fichier.
 */
export const writeComponentFile = (
    type: string,
    name: string,
    className: string,
    props?: string[]
) => {
    if (!componentTemplates[type]) {
        console.error(`❌ Type de composant inconnu : ${type}`);
        return;
    }

    const dir = path.join(process.cwd(), "./src/components");
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const filePath = path.join(dir, `${name}.tsx`);
    fs.writeFileSync(filePath, componentTemplates[type](name, className, props));
    console.log(`✅ Composant ${name} de type ${type} généré dans ${filePath}`);
};
