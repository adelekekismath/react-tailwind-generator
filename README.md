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
npx react-tailwind-generator generate button MyButton "px-4 py-2 bg-blue-500 text-white" icon disabled
```

👉 This creates a MyButton.tsx file in ./src/components/ with these props:
 - children
 - onClick
 - icon
 - disabled

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

## 🎨 Available component types

| Component type | Description |
|----------------|-------------|
| button         | Clickable button with onClick |
| card           | Styled container to display content |
| modal          | Modal window with display management |
| navbar         | Navigation bar with content |
| input          | Input field with a placeholder |


<br>
<br>

## 🛠 Examples
### 1️⃣ Generate a custom button

```sh
npx react-tailwind-generator generate button SubmitButton "px-4 py-2 bg-green-500 text-white" icon disabled
```

📌 Result in ./src/components/SubmitButton.tsx:

```tsx
import React from "react";

export const SubmitButton = ({ children, onClick, icon, disabled }: { 
    children: React.ReactNode; 
    onClick?: () => void; 
    icon?: any; 
    disabled?: boolean; 
}) => {
    return (
        <button className="px-4 py-2 bg-green-500 text-white" onClick={onClick} disabled={disabled}>
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
};

```


<br>
<br>


### 2️⃣ Generate a card with a dynamic title

```sh
npx react-tailwind-generator generate card InfoCard "p-4 shadow-md rounded-lg" title
```

📌 Result in ./src/components/InfoCard.tsx:

```tsx
import React from "react";

export const InfoCard = ({ children, title }: { 
    children: React.ReactNode; 
    title?: string; 
}) => {
    return (
        <div className="p-4 shadow-md rounded-lg">
            {title && <h2 className="font-bold">{title}</h2>}
            {children}
        </div>
    );
};

```
<br>
<br>



## 🏗 Planned improvements
🔹 Addition of customizable themes
🔹 Support for PropTypes or advanced TypeScript
🔹 Automatic generation of Storybook files
🔹 Generation of Jest tests to verify components


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


## 🚀 Utilisation
### 1️⃣ Générer un composant via CLI
Tu peux générer un composant en ligne de commande :

```sh
npx react-tailwind-generator generate button MyButton "px-4 py-2 bg-blue-500 text-white" icon disabled
```

👉 Cela crée un fichier MyButton.tsx dans ./src/components/ avec ces props :
 - children
 - onClick
 - icon
 - disabled

<br>
<br>


 ### 2️⃣ Mode interactif (plus simple 📌)
Tu peux utiliser un assistant interactif pour choisir le type de composant, son nom et ses props :

```sh
npx react-tailwind-generator interactive
```

🔹 L'outil te guidera pour configurer ton composant sans avoir à écrire une longue commande.

<br>
<br>

## 🎨 Types de composants disponibles

| Type de composant | Description |
|-------------------|-------------|
| button            | Bouton cliquable avec onClick |
| card              | Conteneur stylisé pour afficher du contenu |
| modal             | Fenêtre modale avec gestion d'affichage |
| navbar            | Barre de navigation avec du contenu |
| input             | Champ de saisie avec un placeholder |


<br>
<br>

## 🛠 Exemples
### 1️⃣ Générer un bouton personnalisé


```sh
npx react-tailwind-generator generate button SubmitButton "px-4 py-2 bg-green-500 text-white" icon disabled
```

📌 Résultat dans ./src/components/SubmitButton.tsx :

```tsx
import React from "react";

export const SubmitButton = ({ children, onClick, icon, disabled }: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  icon?: any; 
  disabled?: boolean; 
}) => {
  return (
    <button className="px-4 py-2 bg-green-500 text-white" onClick={onClick} disabled={disabled}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

```


<br>
<br>


### 2️⃣ Générer une carte avec un titre dynamique

```sh
npx react-tailwind-generator generate card InfoCard "p-4 shadow-md rounded-lg" title
```

📌 Résultat dans ./src/components/InfoCard.tsx :

```tsx
import React from "react";

export const InfoCard = ({ children, title }: { 
  children: React.ReactNode; 
  title?: string; 
}) => {
  return (
    <div className="p-4 shadow-md rounded-lg">
      {title && <h2 className="font-bold">{title}</h2>}
      {children}
    </div>
  );
};

```
<br>
<br>



## 🏗 Améliorations prévues
🔹 Ajout de thèmes personnalisables
🔹 Support des PropTypes ou TypeScript avancé
🔹 Génération automatique de fichiers Storybook
🔹 Génération de tests Jest pour vérifier les composants


<br>
<br>

## 👨‍💻 Contribuer
Si tu veux améliorer ce projet :

Clone le repo
```sh
git clone https://github.com/adelekekismath/react-tailwind-generator.git
```

Installe les dépendances
```sh
npm install
```


<br>
<br>

Fait tes modifications et crée une PR 🚀


<br>
<br>
## 📜 Licence
MIT © 2025 - Kismath Adeleke


