import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class AvatarTemplate extends AbstractComponentTemplate {

    protected getComponentType(): ComponentType {
        return "avatar";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
  className?: string;
}
`
            : "";
    
return `import React from "react";
${propsInterface}
export const ${name}${isTypeScript ? `: React.FC<${name}Props>` : ""} = ({ 
    src = '#', 
    alt = 'Avatar', 
    size = 'md', 
    shape = 'circle'
}) => {

    const sizeClass = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
    }[size];

    const shapeClass = shape === "circle" ? "rounded-full" : "rounded-lg";

    return (
        <img
            src={src}
            alt={alt}
            className={\`${className} \${sizeClass} \${shapeClass} object-cover\`}
        />
    );
};
    `;
    }
}