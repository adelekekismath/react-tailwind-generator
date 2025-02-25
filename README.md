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
or 
```sh
yarn global add react-tailwind-generator
```

<br>
<br>


## 🚀 Usage
### 1️⃣ Generate a Component via CLI
You can generate a JSX component via command line:

**Generate a JSX Component**

```sh
npx react-tailwind-generator generate  <ComponentName> <ComponentType> -c "<TailwindClasses>"
```

or using the shorthand:

```sh
npx rtg g <ComponentName> <ComponentType> -c "<TailwindClasses>"
```
<br>

**Generate a TypeScript (TSX) Component** <br>

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
| dropdown       | A dropdown menu with options. |
| input          | An input field with a placeholder. |
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
npx react-tailwind-generator generate  ButtonComponent button -c "px-4 py-2 bg-green-500 text-white" 
```

📌 Result in ./src/components/ButtonComponent.jsx:

```jsx
import React from "react";

export const ButtonComponent = ({ text = '', disabled = false, type='button' , onClick = () => {}, ariaLabel = '' }) => {
  return (
    <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onClick}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
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

export const InfoCard = ({ header = null, footer = null, title, content }) => {
    return (
        <div className="p-4 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold">{title}</h1>
            {header && <div className="card-header">{header}</div>}
            <div className="card-body">{content}</div>
            {footer && <div className="card-footer">{footer}</div>}
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


