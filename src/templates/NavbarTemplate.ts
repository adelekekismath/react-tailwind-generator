import { IComponentTemplate } from "../IComponentTemplate";

export class NavbarTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = props.join(", ");

    return `
import React from "react";

export const ${name} = ({ children, ${propsDeclaration} }) => {
  return (
    <nav className="${className} bg-gray-800 text-white p-4">
      {children}
    </nav>
  );
};
    `;
  }
}