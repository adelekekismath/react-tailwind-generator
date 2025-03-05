import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class AccordionTemplate extends AbstractComponentTemplate {
  getComponentType(): ComponentType {
    return "accordion";
  }

  generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    items: { title: string, content: React.ReactNode }[];
    className?: string;
    iconOpen?: React.ReactNode;
    iconClosed?: React.ReactNode;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React, { useState } from "react";
${propsInterface}
export const ${name}${componentType} = ({items = []}) => {
    const [openIndex, setOpenIndex] = ${isTypeScript ? "useState<number | null>(null)" : "useState(null)"};

    const handleToggle = (index${isTypeScript ? ": number" : ""}) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={\`w-full bg-white border border-gray-300 rounded-lg overflow-hidden ${className}\`}>
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                        className="w-full text-left p-4 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => handleToggle(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={\`accordion-content-\${index}\`}
                    >
                        <span>{item.title}</span>
                        <span className="transform transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}">
                            {openIndex === index ? iconOpen || "▼" : iconClosed || "►"}
                        </span>
                    </button>
                    {openIndex === index && (
                        <div
                            id={\`accordion-content-\${index}\`}
                            className="p-4 bg-gray-50 transition-all duration-200"
                        >
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
`;
  }
}