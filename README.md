# Marius Ngaboyamahina Portfolio

Personal portfolio site for `ntezi.github.io`, converted to a static-export Next.js app.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm typecheck
pnpm build
```

`pnpm build` produces the static GitHub Pages output in `out/`.

## Deployment

The repository includes `.github/workflows/nextjs.yml`, which installs dependencies with pnpm, runs `pnpm build`, adds `out/.nojekyll`, and deploys `out/` to GitHub Pages.
