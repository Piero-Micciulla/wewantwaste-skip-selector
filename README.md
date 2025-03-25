# Project Overview and Explanation

This project is a **React-based application** designed to allow users to select and view skip hire information based on their location. It fetches data from an external API, displays it in a user-friendly format, and offers interaction options like selecting a skip and proceeding to the next action. The application has been designed with **accessibility**, **code readability**, and **best practices** in mind.

## Key Features:

- **Display a list of skips** based on a postcode and area.
- **View detailed information** about a selected skip.
- Allow users to **interact with a clear, easy-to-use interface**.
- **Show loading indicators** while fetching data.
- **Handle errors gracefully**, including displaying error messages when data fetching fails.

---

## Components and Files Breakdown

### 1. **API Integration** (`api.ts`)

- **Purpose**: Fetches skip hire data from an API based on the user’s location (postcode and area).
- **Features**:
  - Handles API calls using `fetch`.
  - Returns a list of skips or handles errors by logging them.
- **Error Handling**: If the API request fails, the error is logged, and an empty array is returned.

### 2. **Icon Components** (`ClockIcon.tsx`, `GarbageIcon.tsx`, `PoundIcon.tsx`, `TruckIcon.tsx`, `WarningIcon.tsx`)

- **Purpose**: Reusable SVG icon components for consistent styling across the application.
- **Usage**: The icons are used throughout the app, including in skip information and UI buttons, to improve user experience.
- **Best Practices**:
  - Each icon component is small and self-contained.
  - Uses `className` for flexibility in styling via TailwindCSS.

### 3. **Loader Component** (`Loader.tsx`)

- **Purpose**: Displays a loading spinner when fetching skip data from the API.
- **Features**:
  - Simple, centered spinner styled with TailwindCSS.
  - Uses `aria-label="Loading"` for accessibility.
  - Spins infinitely with a color set to `#517360` (deep green).

### 4. **SkipCard Component** (`SkipCard.tsx`)

- **Purpose**: Displays the details of a single skip, including size, hire period, price, and waste allowance.
- **Features**:
  - Uses TailwindCSS for responsive design and smooth animations.
  - The card has hover and selection animations for better user interaction.
- **Best Practices**:
  - Clear and concise accessibility with `aria-label` to describe each skip’s details.
  - Conditional styling based on whether the skip is selected or not.

### 5. **SkipList Component** (`SkipList.tsx`)

- **Purpose**: Displays a list of skips, with each skip rendered as a `SkipCard`.
- **Features**:
  - Allows users to select a skip.
  - Uses `onSelectSkip` callback to update the selected skip.
- **Accessibility**:
  - Buttons are provided with appropriate `aria-label` to describe actions like selecting a skip.

### 6. **SelectedSkipBar Component** (`SelectedSkipBar.tsx`)

- **Purpose**: Displays the details of the currently selected skip, including the size, hire period, and total price.
- **Features**:
  - Displays a floating bar at the bottom of the page with the selected skip’s details.
  - Includes “Back” and “Continue” buttons for user interaction.
- **Accessibility**:
  - `aria-live="polite"` is used for live region updates to notify screen readers of changes in the selected skip’s details.

### 7. **Custom Hook** (`useSkips.ts`)

- **Purpose**: Fetches skip data based on the postcode and area.
- **Features**:
  - Uses `useState` and `useEffect` to manage the fetch process and component re-renders.
  - Handles loading and error states.
  - Custom error handling that logs errors and provides fallback data (empty array).

---

## Key Features and Best Practices

### 1. **React and JSX**

- The application uses **functional components** with hooks (`useState`, `useEffect`) to manage state and lifecycle events.
- Components are clean, reusable, and designed to perform only one task, ensuring maintainability and readability.

### 2. **Error Handling**

- The application has **robust error handling** for API calls, logging errors and displaying user-friendly error messages when necessary.
- `try/catch` blocks are used in async functions to catch and manage errors.
- The error state is typed as `string | null` to ensure type safety.

### 3. **Accessibility**

- **ARIA Roles**: Components like `SkipCard` and `SelectedSkipBar` use ARIA attributes like `aria-label` to provide accessible names to UI elements.
- **Focus Management**: Proper focus management is implemented, especially for interactive elements like buttons.
- **Live Region**: `aria-live="polite"` is used for `SelectedSkipBar` to announce updates to screen readers when the selected skip changes.

### 4. **UI Responsiveness**

- TailwindCSS’s **utility classes** are used for responsiveness, ensuring that the app works well on both mobile and desktop devices.
- `flex` and `grid` layout utilities are employed to create responsive layouts without complex media queries.

### 5. **State Management**

- State is managed using React’s `useState` and `useEffect` hooks, ensuring that the UI updates when skip data is loaded or changed.
- **Selected Skip**: The selected skip is passed down to child components via props to ensure proper communication between components.

### 6. **Error and Loading States**

- **Loading Indicator**: A `Loader` component is used to show a spinning indicator while the app fetches data from the API.
- **Error Handling**: If the API fetch fails, an error message is displayed with the option for users to understand that something went wrong.

---

## Configuration and Setup

### 1. **TypeScript Configuration** (`tsconfig.json`)

- The project uses TypeScript for **type safety**, ensuring better tooling, autocomplete, and easier refactoring.
- The strict mode is enabled to catch potential issues at compile time.
- `tsBuildInfoFile` and `incremental` are set to improve build performance during development.

### 2. **TailwindCSS**

- The app uses **TailwindCSS** for styling, providing utility-first classes for rapid UI development.
- **Responsive Design**: Tailwind’s responsive utilities ensure that the app is mobile-first and adapts to different screen sizes seamlessly.

### 3. **Prettier and ESLint**

- Prettier is enabled for **code formatting**, ensuring consistent code style throughout the project.
- ESLint is used to enforce **code quality** and ensure best practices are followed. It is configured to fix errors automatically when files are saved.

---

## Recommendations and Possible Improvements

### 1. **Code Splitting**

- If the project grows larger, we could consider implementing **code splitting** with React’s `lazy` and `Suspense` to load components only when needed. This can help improve initial page load time.

### 2. **Error Boundary**

- Add an **Error Boundary** component to catch JavaScript errors in the component tree and provide a fallback UI.

### 3. **Testing**

- Write **unit and integration tests** using tools like Jest and React Testing Library to ensure that the app’s functionality is thoroughly tested.

---

## Final Considerations

The redesign of the app focused on improving both aesthetics and user experience by shifting to a brighter and more eco-friendly color scheme. The previous design was much darker, which made the app feel less inviting. I opted for a fresh, lighter palette featuring greenish tones to better connect with the theme of sustainability and environmental conservation. These green hues create a more visually appealing and environmentally conscious atmosphere that aligns with the eco-friendly focus of the app.

In terms of imagery, I updated the visuals to be more engaging and user-friendly. The new images better reflect the skip hire service while remaining relevant to the theme of sustainability, helping users better connect with the purpose of the service. The images are now more inviting and provide a sense of friendliness and approachability.

One key improvement was to the **Selected Skip Bar**. In the initial version, the “day hire” value did not update correctly when selecting a skip. Now, the bar updates in real-time, displaying the correct size, price, and hire period, offering users a more accurate and dynamic experience.

Additionally, I simplified the selection process. Previously, a “selected” button would appear when a skip card was chosen, but this added unnecessary clutter. In the new design, selection is indicated visually by changing borders around the cards, making the process more intuitive and keeping the UI clean. This approach removes redundant elements while enhancing clarity.

To further improve the user experience, I revamped the way the **“Heavy Waste Allowed”** and **“Private Property Only”** labels are presented. Initially, these labels are displayed as icons directly on the skip image, ensuring the cards remain light and visually clean. When hovered over or selected, these icons morph into text explanations, providing users with additional information without overcrowding the card’s design. This transition enhances the overall feel of the card and keeps it more user-focused and less cluttered.

For now, the “Back” and “Continue” buttons are logged for action, with their functions being dependent on the page flow. As the app progresses, these buttons will lead to the appropriate steps in the workflow.

Finally, through the usage of **search parameters**, you can test different postcodes and areas easily, making it possible to test various locations directly via URLs like:

- `http://localhost:5173/?postcode=CB1%200LD&area=Cambridge`
- `http://localhost:5173/?postcode=EH1%201YZ&area=Edinburgh`

The redesign was focused on creating a visually appealing, functional, and easy-to-use app while maintaining a clear connection to the eco-conscious theme.

---
