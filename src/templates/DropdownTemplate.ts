import { AbstractComponentTemplate } from "../AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class DropdownTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "dropdown";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const defaultProps = this.getDefaultProps();
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
  options?: { value: string; label: string }[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `
import React, { useState } from "react";
${propsInterface}

export const ${name}${componentType} = ({ ${defaultProps} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelect = (value ${isTypeScript ? ": string":""}) => {
        setSelectedValue(value);
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <div className={\`${className} relative\`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-2 border rounded-lg flex justify-between items-center"
            >
                {selectedValue || placeholder}
                <span>▼</span>
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(option.value)}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                        {option.label}
                    </div>
                ))}
                </div>
            )}
        </div>
    );
};
    `;
  }
}