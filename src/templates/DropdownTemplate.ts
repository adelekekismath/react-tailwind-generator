import { IComponentTemplate } from "../IComponentTemplate";

export class DropdownTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const defaultProps = ["options = []", "onSelect = () => {}", "placeholder = 'Select an option'"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React, { useState } from "react";

export const ${name} = ({ options, onSelect, placeholder, ${allProps} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
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