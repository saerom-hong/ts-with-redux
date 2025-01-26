# ts-with-redux

This project is a simple React application using TypeScript and Redux. I followed Stephan Grider's React and TypeScript Course on Udemy(https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/) and added an extra CSS by myself. 

 <br />
 
## 🪄 Users can

- search certain npm packages by keyword
- change the theme of the application

<br />

## 📽 Project Overview
![Search for a package (1)](https://github.com/user-attachments/assets/5f1cd071-45fb-4cfe-99ae-ad529fa72586)

<br />

## What I learned from this project...

✅ **My first time using Redux**: Redux is a state management library often used with JavaScript applications to manage the application's global state in a predictable way.
Here's a brief overview of how it works:
1. **Store**: The central place where the application's state lives. The store is a single source of truth, and any changes to the state must go through it.
2. **Actions**:Plain JavaScript objects that describe what you want to do. They always have a `type` property (a string describing the action) and may include additional data (called payload).    
3. **Reducers**: Pure functions that take the current state and an action as inputs and return a new state. Reducers specify how the state changes in response to an action.  
4. **Dispatch**: The mechanism used to send actions to the store. When you *call* `dispatch(action)`, it triggers the reducers to process the action and update the state accordingly. 
5. **Selectors**: Functions used to read specific pieces of state from the store, allowing components to access the data they need.

This YouTube video explaining Redux in 100 Seconds(https://www.youtube.com/watch?v=_shA5Xwe8_4) is super helpful! 

✅ **Also, first time using Tailwind CSS and daisyUI**: There are plenty of CSS frameworks out there; in TailwindCSS, instead of writing custom CSS classes and styles, you apply pre-designed utility classes directly to HTML elements. I installed it based on their documentation (https://tailwindcss.com/docs/installation/using-postcss) and applied a few CSS classes for display flex and width, etc. daisyUI, a library built on top of Tailwind CSS, provides pre-designed, responsive components like buttons, modals, and navbars. It is somewhat similar to MaterialUI when it comes to Pre-Built Components and allows customization of their components. Don't reinvent the wheel! 

✅ **More Familiar with TypeScript**: I wanted to refresh my TS knowledge, and now getting more and more familiar with it! 

<br />

## 🤖 Available Scripts

In the project directory, you can run:

```
npm install 
npm start
```

