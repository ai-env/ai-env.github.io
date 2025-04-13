# envai Website

Official website for envai - helping local businesses succeed online through digital services.

## Development

This project uses Next.js with TypeScript and is deployed to GitHub Pages.


### Prerequisites

- Node.js v20.9.0
- npm v10.1.0 (comes with Node.js)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/envai.git
cd envai
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building

To create a production build:

```bash
npm run build
```

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Project Structure

```
envai/
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # Reusable components
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
├── public/           # Static assets
└── memory-bank/      # Project documentation
```

## Technologies

- Next.js
- TypeScript
- Tailwind CSS
- React
- GitHub Pages
