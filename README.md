[![Sponsor on GitHub](https://img.shields.io/github/sponsors/adelekekismath?color=ff69b4&label=Sponsor%20Me&style=flat)](https://github.com/sponsors/adelekekismath)


# 🎨 React Tailwind Component Generator  

🚀 A generator for React components styled with Tailwind CSS.
Save time by automatically creating buttons, cards, modals, and more, with customizable styles and props.


<br>
<br>

## 📦 Installation

Install the package globally using npm or yarn:

```sh
npm install -g react-tailwind-generator
```

<br>
<br>


## 🚀 Usage
### 1️⃣ Generate a Component via CLI

You can generate a JSX component via command line:

**Generate a JSX Component**
<br>
```sh
npx react-tailwind-generator generate  <ComponentName> <ComponentType> -c "<TailwindClasses>"
```

or using the shorthand:

```sh
npx rtg g <ComponentName> <ComponentType> -c "<TailwindClasses>"
```
<br>

**Generate a TypeScript (TSX) Component** <br>
<br>
Add the -t flag to generate a TypeScript component:

```sh
npx react-tailwind-generator generate  <ComponentName> <ComponentType> -c "<TailwindClasses>" -t
```

or using the shorthand:

```sh
npx rtg g <ComponentName> <ComponentType> -c "<TailwindClasses>" -t
```


**Parameters** <br>


🔹 ``` <ComponentName> ```:  The name of the component you want to create (e.g., CloseButton, InfoCard) <br>
🔹 ``` <ComponentType> ``` : The type of component you want to create (see available types below).<br>
🔹 ``` <TailwindClasses>```  : The Tailwind CSS classes to apply to the component (e.g., "px-4 py-2 bg-blue-500 text-white").

 🎨 Available component types are:

| Component type | Description |
|----------------|-------------|
| button         | A button with text, onClick, disabled, etc. |
| card           | A styled container to display content. |
| modal          | A modal window with display management. |
| navbar         | A navigation bar with content. |
| footer         | A footer with content. |
| alert         | An alert message with a close button. |
| badge          | A badge with text or number. |
| input          | An input field with a placeholder. |
| spinner        | A loading spinner with size and color. |
| tooltip        | A tooltip with text and position. |
| avatar         | An avatar image with size and shape. |
| accordion      | An accordion with sections and content. |
| breadcrumb     | A breadcrumb trail with links. |
| dropdown       | A dropdown menu with options. |
| tabs           | A tabbed interface with content. |
| table          | A table with rows, columns, and data. |

<br>
<br>



### 2️⃣ Interactive mode (easier 📌)
Use the interactive mode to guide you through the component creation process:


```sh
npx react-tailwind-generator interactive
```

🔹 The tool will prompt you to: <br>

- Enter the component name.

- Choose the component type.

- Specify Tailwind CSS classes or use the default styles.

- Choose whether to generate a TypeScript component.



<br>
<br>

## 🛠 Examples
### 1️⃣ Generate a custom button

```sh
npx react-tailwind-generator generate  Button button -c "px-4 py-2 bg-green-500 text-white" 
```

📌 Result in ./src/components/Button.jsx:

```jsx
import React from "react";

export const Button = ({ text = "Button", disabled = false, type = "button", onClick = () => {}, ariaLabel, 
                        className:  propClassName = "" }) => 
{

    const defaultClassName = propClassName;
    const classes = `px-4 py-2 bg-green-500 text-white ${disabled 
                    ? '!bg-gray-400 !cursor-not-allowed' 
                    : defaultClassName}`.trim();

    return (
        <button
            className={classes}
            onClick={!disabled ? onClick : undefined}
            type={type}
            disabled={disabled}
            aria-label={ariaLabel || text}
            role="button"
        >
            {text}
        </button>
    );
};



```


<br>
<br>


### 2️⃣ Generate a card 

```sh
npx react-tailwind-generator generate  InfoCard card -c "p-4 shadow-md rounded-lg" 
```

📌 Result in ./src/components/InfoCard.jsx:

```jsx

import React from "react";

export const InfoCard = ({ header = 'Default Header', footer = 'Default Footer', title = 'Default Title', 
                        content = 'Default Content', className = '' }) => 
{
    return (
        <div className={`${className}`}>
            {header && (
                <div className="text-lg font-semibold text-gray-700 mb-4">
                    {header}
                </div>
            )}

            {title && (
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    {title}
                </h1>
            )}

            <div className="text-gray-600 mb-4">
                {content}
            </div>

            {footer && (
                <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
                    {footer}
                </div>
            )}
        </div>
    );
};

    

```
<br>
<br>



## 🏗 Planned improvements
Here are some features we’re planning to add:

- **Customizable Themes**: Support for custom themes and color schemes.

- **Advanced TypeScript Support**: Improved TypeScript integration with better type safety.

- **Storybook Integration**: Automatic generation of Storybook files for component documentation.

- **Jest Testing**: Generate Jest tests to verify component functionality.


<br>
<br>

## 💖 Support & Sponsoring

If this project helps you, you can support me via [GitHub Sponsors](https://github.com/sponsors/adelekekismath).  
Your support helps me to continue developing and improving this tool. 🚀

<br>
<br>

## 👨‍💻 Contribute
If you want to improve this project:

**Clone the repo**
```sh
git clone https://github.com/adelekekismath/react-tailwind-generator.git
```

**Install dependencies**
```sh
npm install
```

**Make Your Changes**: Add new features, fix bugs, or improve documentation.<br>

**Create a Pull Request**: Submit your changes for review.


<br>
<br>

## 🙏 Credits
- Author: Kismath Adeleke

- Repository: [GitHub](https://github.com/adelekekismath/react-tailwind-generator.git) <br>

**Why Use This Tool?**

- **Save Time**: Automate the creation of React components.

- **Consistency**: Ensure consistent styling with Tailwind CSS.

- **Flexibility**: Customize components with props and Tailwind classes.

- **Ease of Use**: Simple CLI and interactive mode for quick setup.


**Feedback** <br>
If you have any feedback or suggestions, please open an issue on GitHub.


<br>
<br>
## 📜 License
MIT © 2025 - Kismath Adeleke

<br>
<br>


