import { IComponentTemplate } from "../IComponentTemplate";
import { generatePropsUsage } from "../utils/utils";

export class ButtonTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = props.join(", ");
    const propsUsage = generatePropsUsage(props);

    return `
import React from "react";

export const ${name} = ({ children, onClick, ${propsDeclaration} }) => {
  return (
    <button className="${className}" onClick={onClick}>
      {children}
      ${propsUsage}
    </button>
  );
};
    `;
  }
}