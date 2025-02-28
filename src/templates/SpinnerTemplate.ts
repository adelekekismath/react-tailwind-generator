import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class SpinnerTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "spinner";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const defaultProps = this.getDefaultProps();
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ( {${defaultProps}}) => {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-16 h-16',
    };

    return (
        <div
            className={\`\${sizeClasses[size]} border-4 border-\${color}-500 border-t-transparent rounded-full animate-spin ${className}\`}
            role="status"
            aria-label="Loading"
        >
        </div>
    );
};
    `;
    }
}