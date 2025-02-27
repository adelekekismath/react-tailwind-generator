import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";



export class ButtonTemplate extends AbstractComponentTemplate {

    protected getComponentType(): ComponentType {
        return "button";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const propsInterface = isTypeScript
            ? `
type ButtonType = "button" | "submit" | "reset";
            
interface ${name}Props {
    text?: string;
    disabled?: boolean;
    type?: ButtonType;
    onClick?: () => void;
    ariaLabel?: string;
    className?: string;
}
`
            : "";


        return `import React from "react";
${propsInterface}
export const ${name}${isTypeScript ? `: React.FC<${name}Props>` : ""} = ({ ${this.getDefaultProps()} }) => {
    return (
        <button
            className={\`${className}\`}
            onClick={onClick}
            type={type}
            disabled={disabled}
            aria-label={ariaLabel}
            role="button"
        >
            {text}
        </button>
    );
};
    `;
    }
}