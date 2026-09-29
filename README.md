# Sejal Sharma — Portfolio

Personal portfolio website: a single scrolling page covering my background, skills, experience, projects and a contact form.

Live: https://port-liard-five.vercel.app

## Tech stack

- React 18 + Vite
- Tailwind CSS
- EmailJS (contact form)
- react-vertical-timeline-component (experience timeline)

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serves the production build locally
```

## Project structure

```
src/
├── App.jsx              # single-page layout: Home → About → Projects → Contact
├── constants/index.js   # skills, experience, certifications, projects, social links
├── pages/               # Home, About, Projects, Contact sections
├── components/          # Navbar, Footer, HomeInfo, Alert
├── hooks/useAlert.js
└── assets/              # background video, logo, icons, experience images
```

## Updating content

All portfolio content lives in `src/constants/index.js`:

- **projects**: add an object with `iconUrl`, `theme`, `name`, `description`, `github`, and optionally `external` (live demo link).
- **experiences**: timeline entries with `title`, `company_name`, `icon`, `iconBg`, `date` and `points`.
- **skills**: shields.io badge URLs, displayed in array order.

## Deployment

Deployed on Vercel. Import the repo in Vercel with the default Vite settings (build command `npm run build`, output directory `dist`); every push to `main` redeploys.
