# 🎨 React Tailwind Component Generator  

🚀 A generator for React components styled with Tailwind CSS.
Save time by automatically creating buttons, cards, modals, and more, with customizable styles and props.


<br>
<br>

## 📦 Installation

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
### 1️⃣ Generate a component via CLI
You can generate a component via command line:

```sh
npx react-tailwind-generator generate  <ComponentName> <ComponentType> -c "<TailwindClasses>" "
```

or 

```sh
npx rtg g <ComponentName> <ComponentType> -c "<TailwindClasses>" "
```
<br>

🔹 ComponentName: The name of the component you want to create. Ex: CloseButton, InfoCard, etc. <br>
🔹 ComponentType: The type of component you want to create. <br><br>

 🎨 Available component types are:

| Component type | Description |
|----------------|-------------|
| button         | A button with text ,onClick and onBlur event, disabled, aria-label 
| card           | Styled container to display content |
| modal          | Modal window with display management |
| navbar         | Navigation bar with content |
| footer         | Footer with content |
| alert         | Alert message with a close button |
| badge          | Badge with text or number |
| dropdown       | Dropdown menu with options |
| input          | Input field with a placeholder |
<br>
<br>

🔹 TailwindClasses: The Tailwind CSS classes you want to apply to the component. Ex: "px-4 py-2 bg-blue-500 text-white" <br>

  




Ex: You can generate a button component via command line:

```sh
npx react-tailwind-generator generate  CloseButton button -c "px-4 py-2 bg-blue-500 text-white"
```
or 

```sh
npx rtg g  CloseButton button -c "px-4 py-2 bg-blue-500 text-white"
```

👉 This creates a CloseButton.jsx file in ./src/components/ with these defaults props:
 - type
 - text
 - onClick
 - disabled
 - ariaLabel


<br>
<br>


 ### 2️⃣ Interactive mode (easier 📌)
You can use an interactive assistant to choose the component type, its name, and its props:

```sh
npx react-tailwind-generator interactive
```

🔹 The tool will guide you to configure your component without having to write a long command.




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


### 2️⃣ Generate a card with a dynamic title

```sh
npx react-tailwind-generator generate  InfoCard card -c "p-4 shadow-md rounded-lg" 
```

📌 Result in ./src/components/InfoCard.jsx:

```jsx

import React from "react";

export const InfoCard = ({ children, style = {}, additionalClass = '', header = null, footer = null }) => {
  return (
    <div className={`p-4 shadow-md rounded-lg ${additionalClass}`} style={style}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
    

```
<br>
<br>



## 🏗 Planned improvements
🔹 Addition of customizable themes <br>
🔹 Support for PropTypes or advanced TypeScript <br>
🔹 Automatic generation of Storybook files <br>
🔹 Generation of Jest tests to verify components <br>


<br>
<br>

## 👨‍💻 Contribute
If you want to improve this project:

Clone the repo
```sh
git clone https://github.com/adelekekismath/react-tailwind-generator.git
```

Install dependencies
```sh
npm install
```


<br>
<br>

Make your changes and create a PR 🚀


<br>
<br>
## 📜 License
MIT © 2025 - Kismath Adeleke

<br>
<br>


