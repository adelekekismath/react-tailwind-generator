import { IComponentTemplate } from "../IComponentTemplate";

export class FooterTemplate implements IComponentTemplate {
  generate(name: string, className: string): string {
    const defaultProps = ["style = {}", "additionalClass = ''", "leftSection = null", "rightSection = null", "centerSection = null", "links = []"].join(", ");

    return `
import React from "react";

export const ${name} = ({ children, ${defaultProps} }) => {
  return (
    <footer className={\`${className} bg-gray-800 text-white p-4 \${additionalClass}\`} style={style}>
      <div className="container mx-auto flex justify-between items-center">
        {leftSection && <div className="footer-left">{leftSection}</div>}
        {centerSection && <div className="footer-center">{centerSection}</div>}
        {rightSection && <div className="footer-right">{rightSection}</div>}
      </div>
      {links.length > 0 && (
        <div className="footer-links mt-4 flex justify-center gap-4">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="text-white hover:text-gray-400">
              {link.text}
            </a>
          ))}
        </div>
      )}
      {children}
    </footer>
  );
};
    `;
  }
}