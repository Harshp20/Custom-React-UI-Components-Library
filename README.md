# Custom UI Components

A React playground for building accessible, styled UI primitives from scratch. Components are built with **React Aria** for behavior, **Tailwind CSS** for styling, and **class-variance-authority** for variants.

More components are on the way — this repo will grow over time.

## Components

### Button

Accessible button with variants, sizes, and an optional loading state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary"` \| `"secondary"` | `"primary"` | Visual style |
| `size` | `"small"` \| `"default"` \| `"large"` | `"default"` | Padding and text size |
| `loading` | `boolean` | — | Shows a spinner and disables interaction |
| `disabled` | `boolean` | — | Disables the button |

Built with `useButton`, `useHover`, and `useFocusRing` from React Aria. Hover, press, and focus-visible states are exposed via `data-*` attributes for Tailwind styling.

```tsx
import { Button } from "./components/ui/Button";

<Button variant="secondary" size="large" loading={isSubmitting}>
  Save
</Button>
```

## Tech stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — dev server and build
- [Tailwind CSS](https://tailwindcss.com/) v4
- [React Aria](https://react-spectrum.adobe.com/react-aria/) — accessibility and interaction hooks
- [class-variance-authority](https://cva.style/docs) — variant APIs
- [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) — `cn()` utility for class names

## Getting started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`) to preview components.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── components/ui/   # UI primitives (Button, more coming soon)
├── utils/cn.ts      # Tailwind-friendly class name helper
├── App.tsx          # Component demos / playground
└── main.tsx
```

## Roadmap

- [ ] More custom UI components (inputs, dialogs, etc.)
- [ ] Consistent patterns across primitives (variants, a11y, styling)

Contributions and ideas are welcome as the library expands.
