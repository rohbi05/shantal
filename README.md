# Shantal Rohbi Portfolio

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. The website features a beautiful orange theme with smooth animations and a professional layout.

## Features

- Responsive design that works on all devices
- Smooth animations and transitions
- Project carousel
- Skills showcase
- Contact section
- Modern navigation with mobile support

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Add your profile picture:
- Save your profile picture as `profile.jpg` in the `public` folder

4. Start the development server:
```bash
npm run dev
```

## Customization

### Updating Personal Information

1. Update the name in the navigation bar and hero section
2. Modify the about section text
3. Update contact links with your personal information

### Modifying Projects

Edit the `projects` array in `App.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    image: "project-image-url",
  },
  // Add more projects...
];
```

### Changing Colors

The website uses Tailwind CSS for styling. The main color theme is orange, which can be customized by modifying the color classes (e.g., `text-orange-500`, `bg-orange-500`).

### Adding Skills

Modify the skills section by updating the array in the skills mapping:

```typescript
{['JavaScript', 'Python', 'Django', 'React'].map((skill) => (
  // Skill card component
))}
```

## Project Structure

- `src/App.tsx` - Main application component
- `src/main.tsx` - Application entry point
- `src/index.css` - Global styles and Tailwind imports
- `public/` - Static assets including profile picture

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the contents of the `dist` folder to your hosting provider

## Credits

- Icons: [Lucide React](https://lucide.dev)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com)
- Build Tool: [Vite](https://vitejs.dev)