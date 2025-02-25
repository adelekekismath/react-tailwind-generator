import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class InputTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "input";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const defaultProps = this.getDefaultProps();
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({ ${defaultProps} }) => {
    return (
        <input
            className="${className}"
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};
    `;
  }
}