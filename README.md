# Creating a Next.js Application

Create a Next.js application from scratch. Learn the fundamentals and start building.

## Rendering in Next.js

### Pre-rendering:

### What is Static Site Generation (SSG)

Static Site Generation involves building static contents during runtime on the server side. It doesn’t support API requests or dynamic data; instead, it is suitable for static elements like Navbar, Banner, Footer, etc.

Think of SSG as creating a magical painting of your castle in advance. You create the painting once, and everyone who comes to see it looks at the same picture.

In web development, SSG means generating all the pages of your website before anyone visits. So, when someone wants to see your castle, they get the pre-made painting of it. This is super fast because the painting is ready to go, and everyone sees the same thing.

### What is Server Side Rendering (SSR)

Server Side Rendering involves making API calls on user-specific requests, rendering the data on the server side, and then displaying the data on the website.

Imagine your castle is magical and changes its appearance based on who is looking at it. With SSR, when your friend comes to visit, the castle quickly changes its look based on your friend's preferences.

In web development, SSR means the server (the magical castle) prepares the webpage based on who is visiting. So, when someone comes to see your website, the server quickly customizes the page before showing it to them. It's like a magical castle that changes its appearance for each visitor.

In simple terms:

- **SSG:** Showing everyone the same pre-made painting of your castle.
  
- **SSR:** Customizing the castle's appearance for each friend as they come to visit.

## Create your Next.js app
```
npx create-next-app@latest

What is your project name? my-nextjs-app
Would you like to use TypeScript? No
Would you like to use ESLint? Yes
Would you  like to use TailwindCSS? Yes
Would you like to use "src/" directory? Yes
Would you like to use App Router? Yes
Would you like to customize the default import alias ? No
```

### Run the project on development server
```
npm run dev
```

Change server port, in case you want, **package.json file**

```
"scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

## Routing system in Next.js

![Route image one](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route01.png)
![Route image two](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route02.png)

Create a folder in the app directory by the exact name you want to create static route. And a create **page.jsx** file in that folder.

---
### Dynamic Route with id
![Route image Three](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route03.png)
![Route image Four](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route04.png)
Create a folder in the products folder with 3rd bracket **[id]** and a file in that folder named **page.jsx**
**Folder structure: src/app/products/[id]/page.jsx**
Display the dynamic route with *params* in the component

---
### Dynamic Route with query
![Route image Five](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route05.png)
![Route image six](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route06.png)
You can get the query parameter by using the **searchParams** property.

---
### Nested Route:
![Route image Seven](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route07.png)
![Route image Eight](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route08.png)

**Folder structure: src/app/news/blogs/page.jsx**

## Server Side vs Client Side Component
![Server component image 01](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent01.png)
![Server component image 02](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent02.png)

---
The main distinguishable differenc between a server side and a client side component is: You can't add any user interactivity in a server component

