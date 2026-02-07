# Personal Website

Simple static personal/professional website for GitHub Pages.

## Files
- `index.html` - main page content
- `styles.css` - styling
- `assets/resume.pdf` - downloadable resume

## Run locally
Open `index.html` directly in your browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages
1. Push this folder to a GitHub repository.
2. In GitHub, go to `Settings -> Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or `master`), folder `/ (root)`
4. Save and wait about 1-2 minutes.
5. Your site will be live at:
   - `https://<your-username>.github.io/<repo-name>/`

If this repo is named `<your-username>.github.io`, the site URL will be:
- `https://<your-username>.github.io/`
