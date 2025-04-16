# Contributing to the WNL Gamers Website

Thanks for helping out! Here's how you can contribute:

## 💡 Suggesting Updates
- Visit the [Issues section](https://github.com/wnlgamers/website/issues).
- Create a new issue describing your suggestion or bug report.

## 🛠️ Making Changes
1. Make sure your main branch is up to date:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a new branch:
   ```bash
   git checkout -b feature/your-change-name
   ```

3. Make your changes and commit:
   ```bash
   git add .
   git commit -m "Your change description"
   git push -u origin feature/your-change-name
   ```

4. Create a pull request into `main` on GitHub.

## 👀 Previewing Your Work
All branches will generate a live preview on Cloudflare Pages. Look for the link in the pull request view under “Deployments”.

## 📦 Important Notes
- Do **not** commit the `_site/` directory.
- Avoid changes to protected files like `.gitignore`, or GitHub Actions unless explicitly required.

For more background, visit the [Wiki](https://github.com/wnlgamers/website/wiki/Site-Configuration).

Happy contributing! 🎲