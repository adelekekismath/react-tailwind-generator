import { IComponentTemplate } from "../IComponentTemplate";
import { generatePropsUsage } from "../utils/utils";

export class InputTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = ["placeholder", ...props].join(", ");
    const propsUsage = generatePropsUsage(props);

    return `
import React from "react";

export const ${name} = ({ placeholder, ${propsDeclaration} }) => {
  return (
    <input className="${className}" placeholder={placeholder} />
  );
};
    `;
  }
}