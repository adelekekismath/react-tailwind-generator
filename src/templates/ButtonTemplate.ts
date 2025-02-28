import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class ButtonTemplate extends AbstractComponentTemplate {
    
    protected getComponentType(): ComponentType {
        return "button";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const defaultProps = this.getDefaultProps();
        const propsInterface = isTypeScript
            ? `
type ButtonType = "button" | "submit" | "reset";

interface ${name}Props {
    text?: string;
    disabled?: boolean;
    type?: ButtonType;
    onClick?: () => void;
    ariaLabel?: string;
    className: propClassName = "",
}
`
            : "";

        return `import React from "react";
${propsInterface}
export const ${name}${isTypeScript ? `: React.FC<${name}Props>` : ""} = ({ ${defaultProps}} ${isTypeScript ? `: ${name}Props` : ""}) => {
    const finalClassName = propClassName || "${className}";
    return (
        <button
            className={\` \${disabled ? 'bg-gray-400 cursor-not-allowed' : ''} \${finalClassName} \`}
            onClick={!disabled ? onClick : undefined}
            type={type}
            disabled={disabled}
            aria-label={ariaLabel || text}
            role="button"
        >
            {text}
        </button>
    );
};

`;
    }
}
