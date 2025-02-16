import { IComponentTemplate } from "../IComponentTemplate";

export class CardTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = props.join(", ");

    return `
import React from "react";

export const ${name} = ({ children, ${propsDeclaration} }) => {
  return (
    <div className="${className} p-4 shadow-md rounded-lg">
      {children}
    </div>
  );
};
    `;
  }
}