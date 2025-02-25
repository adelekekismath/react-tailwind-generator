import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "../AbstractComponentTemplate";


const ALERT_CLASSES = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
};

export class AlertTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "alert";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  type?: 'info' | 'success' | 'warning' | 'error';
  message?: string;
  onClose?: () => void;
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `
import React , { useState } from "react";
${propsInterface}
export const ${name}${componentType} = ({ ${this.getDefaultProps()} }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        onClose();
    };

    if (!visible) return null;

    const alertClass = \`${className} p-4 rounded-lg \${{
        info: "${ALERT_CLASSES.info}",
        success: "${ALERT_CLASSES.success}",
        warning: "${ALERT_CLASSES.warning}",
        error: "${ALERT_CLASSES.error}",
    }[type]}\`;

    return (
        <div className={alertClass}>
        <div className="flex justify-between items-center">
            <span>{message}</span>
            <button onClick={handleClose} className="text-lg font-bold">&times;</button>
        </div>
        </div>
    );
};
    `;
    }
}