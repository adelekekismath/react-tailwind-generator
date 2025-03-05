import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class BreadcrumbTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "breadcrumb";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  items: { label: string, href: string }[];
  separator?: string;
  className?: string;
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({
    items = [],
    separator = ">",
    className = ""
}) => {
    if (!items || items.length === 0) return null;

    return (
        <nav className={\`flex space-x-2 \${className}\`} aria-label="Breadcrumb">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index === items.length - 1 ? (
                        <span className="text-gray-500" aria-current="page">
                            {item.label}
                        </span>
                    ) : (
                        <a
                            href={item.href}
                            className="text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    )}
                    {index < items.length - 1 && (
                        <span className="text-gray-400 mx-2">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};
    `;
    }
}