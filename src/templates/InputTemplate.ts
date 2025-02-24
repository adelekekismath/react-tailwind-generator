import { IComponentTemplate } from "../IComponentTemplate";

export class InputTemplate implements IComponentTemplate {
  generate(name: string, className: string): string {
    const defaultProps = ["placeholder=''", "type = 'text'", "value = ''", "onChange = () => {}", "onBlur = () => {}"].join(", ");

    return `
import React from "react";

export const ${name} = ({ ${defaultProps} }) => {
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