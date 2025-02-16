import { IComponentTemplate } from "../IComponentTemplate";

export class InputTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = ["placeholder", ...props].join(", ");

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