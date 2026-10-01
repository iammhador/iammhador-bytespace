# ByteSpace

Frontend for ByteSpace, an online course platform for learners and course creators.

Built with Next.js 16, React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
bun install
bun dev
```

Then open http://localhost:3000.

Other scripts:

```bash
bun run build   # production build
bun start       # run the production build
bun run lint    # eslint
```

## Pages

- `/` - Home
- `/register` - Sign up
- `/login` - Sign in
- `/search` - Search courses
- `/courses/[slug]` - Course details (About, Lessons and Reviews tabs)
- `/creators/[slug]` - Creator profile
- 404 page for unknown routes

## Folder structure

```
app/          routes, layouts, global styles and fonts
components/   UI components grouped by page (home, auth, search, course, layout, ui)
lib/          static data
public/       images and icons
```

## Styling

Colors, fonts and shadows are defined as Tailwind theme tokens in `app/globals.css`, for example `bg-primary`, `bg-lime`, `text-shuttle-700`, `font-poppins` and `font-satoshi`.

Fonts: Poppins (Google Fonts), Satoshi and Clash Display (self-hosted in `app/fonts`).

## Todo

- Connect auth forms and newsletter to the API
- Replace static course, creator and review data with real data
- Search filters and sorting
