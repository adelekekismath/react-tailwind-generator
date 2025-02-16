import { IComponentTemplate } from "../IComponentTemplate";

export class ButtonTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = props.join(", ");

    return `
import React from "react";

export const ${name} = ({ children, onClick, ${propsDeclaration} }) => {
  return (
    <button className="${className}" onClick={onClick}>
      {children}
    </button>
  );
};
    `;
  }
}