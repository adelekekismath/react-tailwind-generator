import { IComponentTemplate } from "../IComponentTemplate";
import { generatePropsUsage } from "../utils/utils";

export class NavbarTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = props.join(", ");
    const propsUsage = generatePropsUsage(props);

    return `
import React from "react";

export const ${name} = ({ children, ${propsDeclaration} }) => {
  return (
    <nav className="${className} bg-gray-800 text-white p-4">
      {children}
      ${propsUsage}
    </nav>
  );
};
    `;
  }
}