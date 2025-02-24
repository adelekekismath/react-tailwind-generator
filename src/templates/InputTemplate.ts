import { IComponentTemplate } from "../IComponentTemplate";

export class InputTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const defaultProps = ["type = 'text'", "style = {}", "onChange = () => {}", "onBlur = () => {}"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ placeholder, ${allProps} }) => {
  return (
    <input
      className="${className}"
      placeholder={placeholder}
      type={type}
      style={style}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
    `;
  }
}