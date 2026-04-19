# Personal Branding Site

This project is a Vite + React + Tailwind single-page site prepared for GitHub Pages and Vercel deployment.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

## Production build

```powershell
npm.cmd run build
```

## Project notes

- Framework: `Vite`
- Output directory: `dist`
- Vercel config: `vercel.json`
- Contact form env template: `.env.example`

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Push the contents of this folder to the `main` branch.
3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main` again if GitHub asks for a fresh run.
6. Your site will publish at:

```text
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

The workflow lives at `.github/workflows/deploy.yml` and automatically builds with the correct repository base path for GitHub Pages.

## Deploy with GitHub and Vercel

1. Create a new GitHub repository.
2. Upload the contents of this folder to that repository.
3. In Vercel, click `Add New...` -> `Project`.
4. Import the GitHub repository.
5. Confirm these settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy the project.

## Environment variables

If you enable EmailJS later, add these in Vercel under `Settings -> Environment Variables`:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

## Custom domain

After the first deploy:

1. Open the Vercel project.
2. Go to `Settings -> Domains`.
3. Add your exact custom domain.
4. Update DNS at your domain registrar using the records Vercel shows you.

Typical DNS patterns are:

- Apex domain like `example.com`: usually an `A` record pointing to `76.76.21.21`
- Subdomain like `www.example.com`: usually a `CNAME` pointing to `cname.vercel-dns.com`

Always use the exact DNS values Vercel gives for your project.
