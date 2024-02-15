# Creating a Next.js Application

Create a Next.js application from scratch. Learn the fundamentals and start building.

## Rendering in Next.js

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

## Create your first Next.js app
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

#### Run the project on development server
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
---
## Routing system in Next.js

![Route image 01](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route01.jpeg)
![Route image 02](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route02.jpeg)

Create a folder in the app directory by the exact name you want to create static route. And a create **page.jsx** file in that folder.

---
### Dynamic Route with id
![Route image 03](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route03.jpeg)
![Route image 04](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route04.jpeg)
Create a folder in the products folder with 3rd bracket **[id]** and a file in that folder named **page.jsx**

`Folder structure: src/app/products/[id]/page.jsx`

Display the dynamic route with *params* in the component

---
### Dynamic Route with query
![Route image 05](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route05.jpeg)
![Route image 06](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route06.jpeg)
You can get the query parameter by using the **searchParams** property.

---
### Nested Route
![Route image 07](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route07.jpeg)
![Route image 08](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/route08.jpeg)

`Folder structure: src/app/news/blogs/page.jsx`

---
## Server Side vs Client Side Component
![Server component image 01](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent01.png)
![Server component image 02](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent02.png)

---
Alright, imagine you're playing with toy building blocks. In Next.js, there are two main parts, just like the different kinds of blocks you use to build something cool like a tower.

**Server-Side Component (SSR):**
Think of the server-side component as a friend who knows how to make awesome Lego towers. When you ask this friend for a tower, they quickly build it for you and hand it over. In Next.js, the server-side component is like this friend who builds the webpage for you before you even see it. So, every time you ask for a webpage, your friend (the server) puts it together and gives it to you fully assembled. It's like magic!

**Client-Side Component (CSR):**
Now, imagine you have another friend who gives you a box of special Lego pieces and tells you to build your tower on your own. This is like the client-side component in Next.js. When you load a webpage, your browser (that's like your personal Lego play area) gets the pieces (code) and puts them together to show you the webpage. It's like you're doing some of the work after you get the parts.

So, in a Reddit-style Next.js website:

- The server-side component is like a friend who gives you a ready-made Reddit page whenever you ask for it. They have everything ready, like the posts, comments, and pictures.

- The client-side component is like another friend who helps out by letting you interact with the Reddit page. For example, when you click on a post or upvote, your friend (the client) does some work to update the page without asking the server for a completely new one.

*In summary, the server-side component does most of the work in getting the webpage ready for you, while the client-side component helps with making the webpage interactive and responsive when you play with it.*

---
### Let's create a counter with *useState* hook in the server component. 
![Server component image 03](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent03.png)
![Server component image 04](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent04.png)

By default the components in the app directory behaves like a server component, in order to use hooks and add interactivity to a server component you need to use the **use client** keyword at top of the component.

---
### Now, if we use **use client** at top of the server component it converts into a client component.
![Server component image 05](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent05.png)

![Server component image 06](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent06.png)

---
The example above is not the best practice to incorporate interactivity into components. If you turn a server component in the app directory into a client component it will throw errors in the production. The best practice is to create a folder in the src directory as named components and keep all of your client components in that folder.

<br>

![Server component image 07](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent07.png)

<br>

And then import the counter component in the in the *page.jsx* file
![Server component image 08](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/serverComponent08.png)

---
## Built in routes in Next.js
![Built in routes in next.js image 01](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/BuiltRoute01.PNG)

Next.js provides a set of special files to create UI with specific behavior in nested routes.

### Error page
![Built in routes in next.js image 02](https://github.com/justJubair/get-started-with-next.js/blob/main/src/assets/BuiltRoute02.png)
![Built in routes in next.js image 03](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/BuiltRoute03.png)

**Error Page (Uh-Oh, Something Went Wrong!)**

Create a file in the app directory with exact name *error.js* otherwish it won't work. The file extension can js, jsx or tsx. But what is this *error.js* page do?

Imagine you're playing with your toys, and sometimes things might not work as expected. The "error page" is like a friendly robot that appears and says, "Uh-oh, something went wrong!" It helps you understand that there's a little hiccup in the playtime, but don't worry, the robot is there to guide you and figure out what happened.

---
### Loading Page
![Built in routes in next.js image 04](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/BuiltRoute04.png)
![Built in routes in next.js image 05](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/BuiltRoute05.png)

**Loading Page (Wait, We're Getting Ready!)**

Create a file in the app directory with exact name *loading.js* otherwish it won't work. The file extension can js, jsx or tsx. But what is this *loading.js* page do?

When you want to play a super cool game, it takes a little time to set everything up, right? The "loading page" is like a superhero costume-changing room. It pops up and says, "Hold on, we're getting everything ready for your awesome adventure!" It helps you be patient while the magical playground is preparing for the fun to start.

---
### Not Found Page
![Built in routes in next.js image 06](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/BuiltRoute06.png)
![Built in routes in next.js image 07](https://raw.githubusercontent.com/justJubair/get-started-with-next.js/main/src/assets/BuiltRoute07.png)

**Not-Found Page (Oops, That's a Dead End!)**

Create a file in the app directory with exact name *not-found.js* otherwish it won't work. The file extension can js, jsx or tsx. But what is this *not-found.js* page do?

Ever took a wrong turn in the playground and ended up in a place with no games? The "not-found page" is like a signpost saying, "Oops, this way is a dead end, no games here!" It's a friendly reminder that the place you're looking for doesn't exist, so let's go back to the main playground and choose a different path.

---
In a nutshell, the "error page" is there when things don't go as planned, the "loading page" helps you wait for the fun to begin, and the "not-found page" kindly tells you when you've reached a dead end.