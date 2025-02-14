# 🎨 React Tailwind Component Generator  

🚀 Un générateur de composants React stylisés avec Tailwind CSS.  
Gagne du temps en créant automatiquement des boutons, cartes, modales et autres, avec des styles et des props personnalisables.

---

## 📦 Installation  

```sh
npm install -g react-tailwind-generator
```
ou 
```sh
yarn global add react-tailwind-generator
```




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




 ### 2️⃣ Mode interactif (plus simple 📌)
Tu peux utiliser un assistant interactif pour choisir le type de composant, son nom et ses props :

```sh
npx react-tailwind-generator interactive
```

🔹 L'outil te guidera pour configurer ton composant sans avoir à écrire une longue commande.



## 🎨 Types de composants disponibles

| Type de composant | Description |
|-------------------|-------------|
| button            | Bouton cliquable avec onClick |
| card              | Conteneur stylisé pour afficher du contenu |
| modal             | Fenêtre modale avec gestion d'affichage |
| navbar            | Barre de navigation avec du contenu |
| input             | Champ de saisie avec un placeholder |




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




## 🏗 Améliorations prévues
🔹 Ajout de thèmes personnalisables
🔹 Support des PropTypes ou TypeScript avancé
🔹 Génération automatique de fichiers Storybook
🔹 Génération de tests Jest pour vérifier les composants




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




Fait tes modifications et crée une PR 🚀



## 📜 Licence
MIT © 2025 - Kismath Adeleke


