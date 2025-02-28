import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class TooltipTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "tooltip";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const defaultProps = this.getDefaultProps();
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  text?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  isVisible?: boolean;
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({ ${defaultProps} }) => {
    if (!isVisible) return null;

    const positionClasses = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    };

    return (
        <div className={\`absolute \${positionClasses[position]} ${className} p-2 bg-black text-white rounded\`} role="tooltip">
            {text}
        </div>
    );
};
    `;
    }
}