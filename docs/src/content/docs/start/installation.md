---
title: Installation
description: Add Flutterwind to your React project
---

To get started using Flutterwind, install it from the npm registry ([flutterwind](https://www.npmjs.com/package/flutterwind)):
```
npm i flutterwind
```

Then add the Flutterwind styles to your app's entry point:
```
import 'flutterwind/dist/style.css'
```

# Tailwind
> This step is optional

The Flutterwind component library is built using [TailwindCSS](https://tailwindcss.com/) and each component exposes the "className" argument so further style classes can be added as needed.

### Install Tailwind
```
npm install -D tailwindcss
npx tailwindcss init
```

### Configure your template paths
```astro {4}
// taliwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS
```
// src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start the Tailwind CLI build process
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

### Use Tailwind with Flutterwind Components
All Flutterwind components expose the `className` argument so you can add additional Tailwind styles on demand:
```astro {3}
function MyComponent() {
  return (
    <Card padding={4} color="primary" className="bg-slate-500">
      <h2>Title</h2>
      <p>Some content goes here...</p>
    </Card>
  );
}
```