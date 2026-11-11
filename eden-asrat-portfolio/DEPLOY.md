# Deploying Eden's Portfolio to GitHub Pages

This site is a Next.js 16 app that exports to a **static site**, so it can be hosted for free on **GitHub Pages**.

There are two ways to deploy:

- **Option A — automatic**: push to GitHub, GitHub Actions builds & deploys for you (recommended).
- **Option B — manual**: build locally and push the `out/` folder to the `gh-pages` branch.

---

## Option A — Automatic deploy via GitHub Actions (recommended)

A workflow is already included at `.github/workflows/deploy.yml`. It builds the static site and publishes it to GitHub Pages on every push to `main`.

### Step 1 — Create the GitHub repository

1. Go to https://github.com/new
2. **Repository name**: anything you like, e.g. `eden-asrat-portfolio`
   - If you name the repo `YOUR_USERNAME.github.io`, the site will live at `https://YOUR_USERNAME.github.io/` (user pages — no subpath).
   - Any other name → the site will live at `https://YOUR_USERNAME.github.io/<repo-name>/` (project pages — auto-handled by the workflow).
3. Set it to **Public** (GitHub Pages for private repos requires a paid plan).
4. **Don't** initialize with a README — leave it empty.

### Step 2 — Push the code

From the project directory:

```bash
# Initialize git (skip if already a repo)
git init
git branch -M main

# Add your GitHub repo as the remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Stage and commit everything
git add -A
git commit -m "Initial commit — Eden Asrat portfolio"

# Push
git push -u origin main
```

### Step 3 — Enable GitHub Pages (one-time setup)

1. In your repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** (NOT "Deploy from a branch").
3. Save.

That's it — within ~1 minute the **Deploy to GitHub Pages** workflow will run, and your site will be live.

### Step 4 — Find your URL

- Settings → Pages shows the live URL, e.g. `https://YOUR_USERNAME.github.io/REPO_NAME/`.
- The workflow run also prints the URL under the **deploy** job.

### Updating the site

Just edit any file, commit, and push to `main`. The workflow re-runs automatically and redeploys.

---

## Option B — Manual deploy (if you don't want GitHub Actions)

### Step 1 — Build the static site locally

```bash
# For a project page (username.github.io/repo-name)
NEXT_PUBLIC_BUILD_TARGET=export \
NEXT_PUBLIC_BASE_PATH=/REPO_NAME \
bun run build:gh

# Or use the helper script that auto-detects the repo name from the folder name
bun run build:gh
```

The static site is generated in `./out/`.

### Step 2 — Push `out/` to the `gh-pages` branch

You can use the `gh-pages` npm package:

```bash
bunx gh-pages -d out
```

Then in GitHub → **Settings → Pages**:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` / root (`/`)
- Save. Site live in ~1 minute.

---

## Notes

### Path strategy

All image and PDF paths in the site are **relative** (`portfolio/IMG_0204.jpg`, `eden-asrat-cv.pdf`) — not absolute (`/portfolio/...`). This means the same code works:

- On the Z.ai preview (`https://preview-...space-z.ai/`)
- On user/org pages (`https://username.github.io/`)
- On project pages (`https://username.github.io/repo/`)

…without any code changes. Just set `NEXT_PUBLIC_BASE_PATH` correctly when building.

### Files NOT committed

The `.gitignore` excludes:
- `node_modules/`
- `.next/`, `out/`
- `upload/` (your source HEIC photos)
- `download/`, `.zscripts/`, `scripts/` (sandbox-only directories)
- `dev.log`, `server.log`
- `.env` files

Only the source code, components, styles, public images, public CV, the workflow, and config files go to GitHub.

### Custom domain (optional)

If you later buy a domain like `edenasrat.com`:

1. Add a `CNAME` file in `public/CNAME` containing `edenasrat.com`.
2. In GitHub → Settings → Pages → Custom domain, enter your domain.
3. Set `NEXT_PUBLIC_BASE_PATH=` (empty) when building.

### Build troubleshooting

If the workflow fails, click the failed run under the **Actions** tab — the log tells you which step broke. Common issues:

- **"Pages not enabled"** — go to Settings → Pages and set Source to "GitHub Actions".
- **Asset 404s on project pages** — confirm `NEXT_PUBLIC_BASE_PATH=/REPO_NAME` matched your repo name. The workflow auto-detects this.
- **Repo private** — Pages for private repos needs GitHub Pro. Make the repo public to deploy for free.

---

## Quick reference

```bash
# One-time setup
git init && git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git add -A && git commit -m "Initial commit" && git push -u origin main

# Then enable Pages → Source: GitHub Actions (Settings → Pages)

# Future updates
git add -A && git commit -m "Update portfolio" && git push
```
