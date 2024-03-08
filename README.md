# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- ShadCN usage Documentation -->

I incorporated ShadCn into my project and created react and tailwind using ShadCN using the following Steps:

1. Create project :- Start by creating a new React project using vite:
    "npm create vite@latest"

2. Add Tailwind and its configuration :- Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:
    "npm install -D tailwindcss postcss autoprefixer"
    "npx tailwindcss init -p"

3. Edit jsconfig.json file :-Add the following code to the tsconfig.json file to resolve paths:
    "{
    "compilerOptions": {
        // ...
        "baseUrl": ".",
        "paths": {
        "@/*": [
            "./src/*"
        ]
        }
        // ...
    }
    }"

4. Update vite.config.js : Add the following code to the vite.config.ts so your app can resolve paths without error
    Install : npm i -D @types/node
    Use :   import path from "path"
            import react from "@vitejs/plugin-react"
            import { defineConfig } from "vite"
            
            export default defineConfig({
            plugins: [react()],
            resolve: {
                alias: {
                "@": path.resolve(__dirname, "./src"),
                },
            },
            })

5. Run the CLI : Run the shadcn-ui init command to setup your project:
    "npx shadcn-ui@latest init"

6. Configure components.json : You will be asked a few questions to configure components.json:
    Fill the following :
                        - Would you like to use TypeScript (recommended)? no / yes
                        - Which style would you like to use? › Default
                        - Which color would you like to use as base color? › Slate
                        - Where is your global CSS file? › › src/index.css
                        - Do you want to use CSS variables for colors? › no / yes
                        - Where is your tailwind.config.js located? › tailwind.config.js
                        - Configure the import alias for components: › @/components
                        - Configure the import alias for utils: › @/lib/utils
                        - Are you using React Server Components? › no / yes (no)

<!-- Installation and Usage of ShadCN -->
After Installing I used there Card Component using - "npx shadcn-ui@latest add card"

Card Component was created and then I created my own Components and inheritied them in Card component and styled them using Tailwind Css.
Added Shadow in to the Card component of ShadCn - "shadow-2xl"

Usage Of Card Component : "<Card>
                            {/* shadcn cardcontent with 2 different components*/}
                                <CardContent>
                                {/* innercard Component */}
                                <InnerCard />
                                {/* CardDetails Component */}
                                <CardDetails />
                                {/* MenuCard Component */}
                                <MenuCard/>
                                </CardContent>
                            </Card>"

Global Css file - index.css
Used React with Javascript