#  Dev Stack

**Dev Stack** is a one-page interactive web app where developers can explore popular technologies (frontend, backend, databases, languages, and more) and build their own personal "tech stack" by adding tools they like to a custom collection.

Browse through curated technology cards, check ratings and difficulty levels, and pick the perfect combination of tools for your next project — all saved right in your stack panel as you go.

##  Built With

- **React.js** — component-based UI
- **Vite** — fast build tool and dev server
- **Tailwind CSS** — utility-first styling
- **DaisyUI** — Tailwind component library
- **React-Toastify** — toast notifications
- **JSON** — local data source for technology listings

##  Features

- ** Dynamic Technology Grid** — Browse 10+ technologies displayed in a fully responsive card layout (1 column on mobile, 2 on tablet, 3 on desktop), each showing an icon, badge, category, difficulty level, and star rating.
- ** Build Your Own Stack** — Add technologies to a personal "Your Stack" sidebar with a single click, complete with duplicate-prevention warnings, individual remove buttons, and a "Remove All" option to start fresh.
- ** Unified Gradient Branding** — A single orange → pink → violet gradient theme flows across the brand name, hero heading, and primary buttons, defined in one place for easy re-theming.

---

##  React Concepts — Q&A

*(answered in my own words)*

**1. What is JSX, and why is it used in React?**

JSX is stand for JavaScript XML. It is basically allow us to write HTML like code inside our JavaScript file. Without JSX we have to write React.createElement() every time which is very messy and hard to read. So JSX make our code more clean and easy to understand, also it feel like writing normal HTML but we can use JavaScript logic inside it with curly braces `{}`. That is why almost everyone use JSX in React project.

**2. What is the difference between props and state?**

Props and state both are use for handle data in React but they are not same thing. Props is short form of "properties", it is pass from parent component to child component, and child cannot change the props value, it is read-only for child. But state is data which is manage inside the component itself, and component can change its own state using setter function like `setSomething`. So basically props come from outside and state is internal memory of a component. In simple word — props is for communication between components, state is for component's own changing data.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` hook is help us to add state (changing data) inside a functional component. Before hooks come, only class component can have state, but now with `useState` functional component also can store and update value. It return an array with two thing — current value and a function to update that value.

In my project I use `useState` in many place, like for storing the list of technologies after fetching from JSON, for storing the "Your Stack" array (technologies which user added), for tracking loading state while data is fetching, and also for controlling mobile hamburger menu open/close.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` hook is use for handle "side effects" in our component, that mean things which happen outside of normal render, like fetching data, updating document title, or setting up timer. It run after the component render on screen.

I needed `useEffect` because I want to load the technology data one time when the component first mount, not every time the component re-render. So I put my fetch/import logic inside `useEffect` with empty dependency array `[]`, so it only run once at starting, like when page load first time. That is also where I turn on loading state before fetching and turn it off after data arrive.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

When we use `.map()` for render list of items (like technology cards or stack items), React need a `key` prop for identify each item uniquely. This help React to know which item is added, removed or changed, so it can update only that specific item in the DOM instead of re-rendering whole list again. If we don't give key, or give same key for multiple item, React can get confuse and may render wrong item or give warning in console, and also app performance become slow. So I use the technology's `id` field as key because it is always unique for every item.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering mean showing different UI or content based on some condition, just like if-else statement but inside our JSX. We can do this using ternary operator (`condition ? A : B`) or logical `&&` operator.

In my project I use conditional rendering in "Your Stack" section — if the stack array length is 0 (empty), then I show a message like "No technology selected yet, start adding from the grid!", but if there is item inside stack array, then I map through the array and show all the added technology items instead of the empty message. I also use conditional rendering for the loading state, showing spinner when `loading` is true and showing the actual cards when it become false.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

For pass data from parent to child, we use props. Parent component just write the child tag like `<TechCard data={tech} />` and pass whatever value or object we want as attribute, then inside child component we can receive it through function parameter, like `function TechCard(props)` or using destructuring `{ data }`.

For sending data back from child to parent, we cannot directly do it because props only flow one direction (top to bottom). So the trick is, parent create a function (like `handleAddToStack`) and pass that function down to child as a prop, same way like other data. Then inside child, when some event happen (example: user click "Add to Stack" button), child just call that function with whatever data it want to send, like `onAddToStack(tech)`. Since that function actually belongs to parent, it run in parent's scope and can update parent's state with the data child sent. This way child can "talk back" to parent even though props only go downward.
