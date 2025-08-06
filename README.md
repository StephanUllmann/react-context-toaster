# React Context Toaster

A simple, lightweight, and customizable toast notification system for React applications, built with the power of the Context API.

It's easy to integrate, allows for calling toasts from any component in your app, and is highly customizable.

## Features

- **Simple Integration**: Wrap your app in the `ToasterProvider` and you're ready to go.
- **Context-Based**: Call toasts from any component in your app using `useContext`.
- **Customizable**: Easily configure toast types (success, error, neutral), position, and duration.
- **Interactive**: Toasts auto-dismiss with a progress bar, can be paused on hover, and dismissed on click.
- **Lightweight**: No external dependencies for the core functionality.

## Installation

This is not a published package. To use it in your project:

1.  Copy the `src/contexts/ToasterContext.jsx` file into your project.
2.  Create a corresponding CSS file (e.g., `Toaster.css`) for styling and import it. You can use the example styles below as a starting point.

## Usage

### 1. Wrap your application

Wrap your root component (or any part of your component tree) with the `ToasterProvider`.

```jsx
// In your main App.jsx or equivalent
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToasterProvider from './contexts/ToasterContext';
import './index.css'; // Your global styles
import './Toaster.css'; // Add styles for the toaster

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToasterProvider styles={{ position: 'top-right' }}>
      <App />
    </ToasterProvider>
  </React.StrictMode>
);
```

### 2. Trigger toasts from any component

Use `useContext` with the exported `ToasterContext` to get access to the `toast` functions.

```jsx
// In any component that is a child of ToasterProvider
import { useContext } from 'react';
import { ToasterContext } from './contexts/ToasterContext';

function MyComponent() {
  const { toast } = useContext(ToasterContext);

  return (
    <div>
      <button onClick={() => toast.success('Profile updated successfully!')}>Show Success</button>
      <button onClick={() => toast.error('Failed to load data.')}>Show Error</button>
      <button onClick={() => toast.toast('This is a neutral message.')}>Show Neutral</button>
    </div>
  );
}

export default MyComponent;
```

## API Reference

### `<ToasterProvider />`

The provider component that enables the toaster system.

| Prop       | Type                                                                                | Default     | Description                                                                      |
| :--------- | :---------------------------------------------------------------------------------- | :---------- | :------------------------------------------------------------------------------- |
| `children` | `React.ReactNode`                                                                   | -           | Your application's component tree.                                               |
| `styles`   | `{ position: 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| ... }` | `top-right` | An object to control the container's position. The value is used as a CSS class. |

### `useContext(ToasterContext)`

Consuming the context provides access to the toast functionality.

**Returns:**

An object with the following property:

- `toast`: An object with the following methods:
  - `toast.success(message: string)`: Displays a success toast.
  - `toast.error(message: string)`: Displays an error toast.
  - `toast.toast(message: string)`: Displays a neutral toast.

### `<Toast />` (Internal)

The component for an individual toast message. This is used internally by the `ToasterProvider`.

| Prop       | Type     | Default | Description                                                                  |
| :--------- | :------- | :------ | :--------------------------------------------------------------------------- |
| `duration` | `number` | `5000`  | The time in milliseconds for the toast to be visible before auto-dismissing. |

## Customization & Styling

You can style the toaster by targeting the CSS classes applied to the elements. Here is a basic set of styles to get you started. The component also applies animation classes (`enter-bottom`, `leave`, `leave-bottom`) which you can target for custom animations.

```css
/* Toaster.css */
.toaster {
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: clamp(250px, 80vw, 350px);
}

/* Positioning */
.top-right {
  top: 1rem;
  right: 1rem;
}
.top-left {
  top: 1rem;
  left: 1rem;
}
.bottom-right {
  bottom: 1rem;
  right: 1rem;
}
.bottom-left {
  bottom: 1rem;
  left: 1rem;
}

.toast {
  position: relative; /* Needed for the progress bar */
  background-color: #fff;
  color: #333;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  animation: enter 0.35s ease-out;
}

.toast p {
  margin: 0;
}

.toast-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```
