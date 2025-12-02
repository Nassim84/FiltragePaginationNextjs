# 🚀 FiltragePaginationNextjs

**Next.js + Filtrage & Pagination**
Projet réalisé avec **Next.js (App Router)** permettant de filtrer et paginer une liste de données. Le code est clair, maintenable et simple à étendre.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Nassim84/FiltragePaginationNextjs/blob/main/LICENSE)
[![Vercel](https://vercelbadge.vercel.app/api/Nassim84/FiltragePaginationNextjs)](https://vercel.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?logo=nextdotjs)](https://nextjs.org/)

---

## 📌 Sommaire

- [🔧 Installation & Lancement](#-installation--lancement)
- [📁 Structure du projet](#-structure-du-projet)
- [🧠 Fonctionnalités](#-fonctionnalités)
- [📸 Capture d’écran](#-capture-décran)
- [🔧 API](#-api)
- [⚙️ Build & Déploiement](#-build--déploiement)
- [❗ Notes importantes](#-notes-importantes)
- [📜 Licence](#-licence)

---

## 🔧 Installation & Lancement

Clone le dépôt :

```bash
git clone https://github.com/Nassim84/FiltragePaginationNextjs.git
cd FiltragePaginationNextjs
```

Installe les dépendances :

```bash
npm install
# ou yarn / pnpm / bun
```

Lance le serveur de développement :

```bash
npm run dev
```

➡️ Ouvre ensuite : [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
.
├── app/
│   ├── page.tsx          # Page principale avec filtrage + pagination
│   ├── globals.css       # Styles globaux
│   └── ...
├── components/           # Composants UI
├── public/               # Images et assets statiques
├── styles/               # Styles personnalisés
├── next.config.js
└── package.json
```

---

## 🧠 Fonctionnalités

- 🔍 **Filtrage dynamique**
- 📄 **Pagination fluide côté client**
- ⚡ **Next.js (App Router)**
- 🎨 **CSS moderne**
- 🖼️ **Images servies via /public**

---

## 📸 Capture d’écran

![Capture d’écran de l’application](https://via.placeholder.com/1200x600/0078D4/FFFFFF?text=Filtrage+Pagination+Next.js)

_(Remplace cette URL par une vraie capture d’écran hébergée sur GitHub ou un autre service.)_

---

## 🔧 API

### Endpoints disponibles

| Endpoint      | Méthode | Description                       |
| ------------- | ------- | --------------------------------- |
| `/api/data`   | GET     | Récupère la liste des données     |
| `/api/filter` | POST    | Filtre les données selon critères |

**Exemple de requête :**

```javascript
fetch("/api/data")
	.then((res) => res.json())
	.then((data) => console.log(data));
```

---

## ⚙️ Build & Déploiement

### Build (production)

```bash
npm run build
npm start
```

### Déploiement sur Vercel

Le projet est 100% compatible Vercel sans configuration supplémentaire.

**Étapes :**

1. Push du code sur GitHub
2. Aller sur [https://vercel.com](https://vercel.com)
3. "New Project"
4. Sélectionner le repository
5. Déployer

---

## ❗ Notes importantes

- Aucune configuration de type `basePath`/`assetPrefix` n’est nécessaire sur Vercel.
- Les images doivent être référencées comme :
  ```javascript
  /images/nom.png
  ```
  Exemple avec `next/image` :
  ```javascript
  import Image from "next/image";
  <Image src="/images/avatar.png" width={300} height={300} alt="avatar" />;
  ```

---

## 📜 Licence

Projet libre d’utilisation.
