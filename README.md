# 🚀 DevStack

DevStack is a modern and responsive React-based web application that helps developers explore different technologies and build their own development stack.

Users can explore technologies from different categories, view their details, and add their favorite technologies to their personal stack.

---

## 🌐 Live Website

🔗 [Live Demo](https://dev-stack-web.vercel.app/)

## 📦 GitHub Repository

🔗 [GitHub Repository](https://github.com/Tamiim-Iqbal/DevStack)

---

## 🛠️ Technologies Used

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌸 DaisyUI
- 🔔 React Toastify
- 📄 JSON
- HTML5
- CSS3

---

## ✨ Features

### 1. 🔍 Explore Technologies

Users can explore different technologies and see useful information such as their name, description, category, difficulty level, rating, and badge.

### 2. 🧩 Build Your Own Stack

Users can add technologies to their personal development stack and remove individual technologies whenever they want.

### 3. 📱 Responsive & Dynamic UI

The application loads technology information dynamically from a JSON file and provides a responsive interface that works across different screen sizes.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

**Answer:**

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us describe how the UI should look.

Example:

```jsx
const App = () => {
  return (
    <div>
      <h1>DevStack</h1>
      <p>Build your development stack.</p>
    </div>
  );
};
```

---

## 2. What is the difference between props and state?

**Answer:**

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is data managed inside a component. When state changes, React updates the UI.

For example, in this project, `technology` is passed as a prop to `TechnologyCard`, while `selectedTechnologies` is managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**

The `useState` hook is used to create and manage changing data inside a React component.

I used it in the `Technologies` component to store the technologies selected by the user.

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<ITechnology[]>([]);
```

I also used it in the `Navbar` component to control the mobile menu.

```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:**

The `useEffect` hook is used to perform side effects in a React component, such as fetching data, updating the document, or working with external systems.

However, I did **not use `useEffect` in this project** to load the JSON data.

Instead, I used the React `use()` API with `Suspense`.

The JSON data is fetched from:

```text
public/data.json
```

The fetch function is:

```tsx
const technologiesFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('/data.json');

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  return response.json();
};
```

Then the data is read using:

```tsx
const technologies = use(technologiesPromise);
```

And `Suspense` handles the loading state:

```tsx
<Suspense fallback={<div>Loading.....</div>}>
  <Technologies
    technologiesPromise={technologiesPromise}
  />
</Suspense>
```

So, `useEffect` is commonly used for data fetching, but this project uses `use()` and `Suspense` instead.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed, so it can update the UI efficiently.

In this project:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
    selectedTechnologies={selectedTechnologies}
    onAddToStack={handleAddToStack}
  />
))}
```

Here, `technology.id` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

**Answer:**

Conditional rendering means showing different UI based on a condition.

I used conditional rendering in the stack section.

When the stack is empty, the user sees an empty stack message:

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

I also conditionally show the **Remove All** button only when there are selected technologies:

```tsx
{selectedTechnologies.length > 0 && (
  <button onClick={onRemoveAll}>
    Remove All
  </button>
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**

A parent component passes data to a child component using **props**.

For example, the parent passes the technology and a function to `TechnologyCard`:

```tsx
<TechnologyCard
  technology={technology}
  selectedTechnologies={selectedTechnologies}
  onAddToStack={handleAddToStack}
/>
```

The child receives these values through props:

```tsx
const TechnologyCard = ({
  technology,
  selectedTechnologies,
  onAddToStack
}: TechnologyCardProps) => {
  // ...
};
```

The child can send an action back to the parent by calling a function passed through props:

```tsx
<button onClick={() => onAddToStack(technology)}>
  Add to Stack
</button>
```

So the communication looks like this:

```text
Parent
   ↓
 Props
   ↓
Child
   ↓
Callback Function
   ↓
Parent
```

---

# 👨‍💻 Author

**Tamim Iqbal**

Built with ❤️ using React, TypeScript, and Tailwind CSS.

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!