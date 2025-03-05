import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class SpinnerTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "spinner";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
         
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({
    size = 'md',
    color = 'blue',
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-16 h-16',
    };

    return (
        <div
            className={\`\${sizeClasses[size]} border-4 border-\${color}-500 ${className}\`}
            role="status"
            aria-label="Loading"
        >
        </div>
    );
};
    `;
    }
}