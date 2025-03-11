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
  className?: string;
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
import clsx from "clsx";
${propsInterface}
export const ${name}${componentType} = ({
    size = 'md',
    color = 'blue',
    className = '',
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-16 h-16',
    };

    const classes = clsx(sizeClasses[size], \`border-4 border-\${color}-500 border-t-transparent rounded-full animate-spin \`, className);

    return (
        <div
            className={classes}
            role="status"
            aria-label="Loading"
        >
        </div>
    );
};
    `;
    }
}