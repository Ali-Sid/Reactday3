// Day 3: React setting up

// Exercises: Level 1

// 1. What is a module?
// A module is a reusable piece of code that encapsulates a specific component or functionality. It allows you to organize your code into smaller units that can be imported and can be used in other parts of the code.
// A module can be a javascript file that is exported to other files using 'export' keyword and other files can able to access the module by importing the module using 'import' keyword.

// 2. What is package?
// A package is a collection of code files, assets, metadata that is organized and distributed as a single unit.
// Packages can include various types of files, such as source code files, configuration files, documentation, images, stylesheets, and more. They are typically structured in a specific format that defines their contents and dependencies.
// Packages are often used in package management systems like npm (node pakage manager) for JavaScript.

// 3. What is the difference between a module and a package.
// A module is a reusable piece of code that is used to break down to specific piece of code into a component and functionality then it is export to other parts of the file. Other files can able to access the modules using the 'import' keyword.
// Whereas a package is a collection of all the assets, metadata and code files that are packed as a single unit and can be accessed after installing into your directory.

// 4. What is NPM?
// NPM (Node Package Manager) is a package manager for JavaScript (node.js) that is used to install all the necessary files into the current directory to make your development easier which provides a centralized repository of packages for easy installing, sharing, and management of JavaScript code.
// NPM allows developers to easily install and use packages from the npm registry, which is a vast collection of open-source JavaScript packages contributed by developers worldwide. These packages can be libraries, frameworks, command-line tools, or other reusable code modules.
/* Some common NPM commands include:

npm install: Installs packages and their dependencies in a project.
npm init: Initializes a new project and creates a package.json file.
npm publish: Publishes a package to the npm registry.
npm update: Updates packages to their latest versions.
npm run: Executes scripts defined in the package.json file.
*/

// 5. What is Webpack?
// Webpack is a module bundler for JavaScript applications. It bundles modules with their dependencies and converts them into an optimized output. It supports loaders for transforming different file types and plugins for extending its functionality. Webpack enables code splitting, has a development server, and is widely used in modern web development. It can handle various types of assets, including JavaScript, CSS, images, and more.

// 6. How do you create a new React project?
// There are several ways to create a new React project.
// Method 1:
// You can create a new React project by using create-react-app.
// It is a popular way to create a new React project.
// It downloads lots of files and dependencies and it takes lot of time to create a new project.
// In order to create a new project, simply type the following command in your terminal:
// npx create-react-app [project-name]

// Method: 2
// You can also create a new React project with the help of vite
// vite is a frontend tooling framework used in modern web development to make the development experience faster.
// It is fast and installs all the required dependencies very quickly and takes less space than create-react-app.
// In order to create a new project in vite, simply run this command in your terminal:
// npm create vite@latest
// then type the project name
// Select the type of framework/library for your project
// Select the language (JavaScript/TypeScript)

// 7. What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?
// There are several folders and files inside a project:
// 1. Node modules: This folder stores all the necessary node packages of the React applications.
// 2. Public folder: index.html - the only HTML file we have in the entire application

// favicon.ico - an icon file

// manifest.json - is used to make the application a progressive web app

// other images - open graph images(open graph images are images which are visible when a link share on social media)

// robots.txt - information, if the website allows web scraping
// 3. src folder:
/* App.css, index.css - are different CSS files
index.js - a file which allows to connect all the components with index.html
App.js - A file where we usually import most of the presentational components
serviceWorker.js: is used to add progressive web app features
setupTests.js - to write testing cases
*/
/* some other files:
package.json- List of packages the applications uses

.gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub

README.md - Markdown file to write documentation

yarn.lock or package-lock.json - a means to lock the version of the package
*/

// 8. What is your favorite code editor (I believe that it is Visual Studio Code)?
// My favourite code editor is VS Code, it's the only code editor I always prefer to code.

// 9. Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).
// Already installed!!!

// 10. Try to make a different custom module in a different file and import it to index.js.
// export const greet = (name) => {
//     console.log(`Hello, ${name}!`)
// }

// export const message = 'Welcome to my module!'


// Exercises: Level 2
// 1. Import and render the following images.
// refer index.js

// 2. Use h1, p, input and button HTML elements to create the following design using JSX