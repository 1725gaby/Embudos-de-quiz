@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Outfit", sans-serif;

  --color-brand-green: #2F5D3A;
  --color-brand-green-light: #F0F7F1;
  --color-brand-pink: #E85D75;
  --color-brand-gray-light: #F5F5F5;
  --color-brand-gray-dark: #333333;
}

@layer base {
  body {
    @apply bg-brand-gray-light text-brand-gray-dark font-sans;
  }
}
