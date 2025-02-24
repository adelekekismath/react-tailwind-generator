import { ComponentType } from "./types";

export const COMPONENT_TYPES: ComponentType[] = [
  "button", "card", "modal", "input", "navbar", "alert", "dropdown", "badge", "avatar", "footer"
];

export const DEFAULT_CLASSES: Record<ComponentType, string> = {
    button: "px-4 py-2 bg-blue-500 text-white rounded",
    card: "p-6 bg-white shadow-md rounded-lg",
    modal: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
    input: "p-2 border border-gray-300 rounded",
    navbar: "p-4 bg-gray-800 text-white",
    alert: "p-4 bg-red-100 text-red-700 rounded",
    dropdown: "p-2 bg-white border border-gray-300 rounded",
    badge: "px-2 py-1 bg-green-100 text-green-700 rounded-full",
    avatar: "w-12 h-12 rounded-full",
    footer: "p-4 bg-gray-800 text-white",
  };


  export const DEFAULT_PROPS: Record<ComponentType, string[]> = {
    button: ["onClick", "disabled"],
    card: ["title", "content"],
    modal: ["isOpen", "onClose"],
    input: ["value", "onChange", "placeholder"],
    navbar: ["logo", "links"],
    alert: ["message", "type"],
    dropdown: ["options", "onSelect"],
    badge: ["text", "variant"],
    avatar: ["src", "alt"],
    footer: ["copyrightText"],
  };
