import { ComponentType } from "./types";

export const COMPONENT_TYPES: ComponentType[] = [
    "alert", "avatar", "badge", "button", "card", "checkbox", "dropdown", "footer", "form", "input", "label", "modal", "navbar","textarea",
    "radio", "select","sidebar", "table", "tooltip", "spinner", "breadcrumb", "accordion", "tabs"
];

export const DEFAULT_CLASSES: Record<ComponentType, string> = {
    button: "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded",
    card: "p-6 bg-white shadow-md rounded-lg",
    modal: "bg-white p-6 rounded-lg shadow-lg",
    input: "p-2 border border-gray-300 rounded",
    navbar: "p-4 bg-gray-800 text-white",
    alert: "rounded max-w-md",
    dropdown: "max-w-md",
    badge: "px-2 py-1 rounded-full",
    avatar: "w-12 h-12 rounded-full",
    footer: "p-4 bg-gray-800 text-white",
    tooltip: "p-2 bg-black text-white rounded",
    sidebar: "w-64 bg-gray-800  h-full",
    table: "w-full bg-white border border-gray-300",
    spinner: "",
    breadcrumb: "flex space-x-2 text-blue-500",
    accordion: "w-full bg-white border border-gray-300 rounded",
    tabs: "flex space-x-4 border-b border-gray-300",
    textarea: "p-2 border border-gray-300 rounded",
    select: "p-3 border rounded focus:outline-none focus:ring",
    checkbox: "form-checkbox h-5 w-5 text-blue-600",
    radio: "form-radio h-5 w-5 text-blue-600",
    label: "block text-gray-700",
    form: "w-full max-w-lg"
};

export const DEFAULT_PATH = "src/components";

