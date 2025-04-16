# Contributing to the WNL Gamers Website

Thanks for helping out! Here's how you can contribute:

---

## 💡 Suggesting Updates

- Visit the [Issues section](https://github.com/wnlgamers/website/issues).
- Create a new issue describing your suggestion or bug report.
- You can also comment on an existing issue if you'd like to contribute ideas.

---

## 🛠️ Making Changes

1. Make sure your local `main` branch is up to date:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-change-name
   ```

3. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Descriptive message about your change"
   git push -u origin feature/your-change-name
   ```

4. Open a **pull request** into the `main` branch from your new branch.

---

## 👀 Previewing Your Work

All branches will automatically generate a live **preview site** using Cloudflare Pages. The URL format is:

```
https://[branch-name].website-a8e.pages.dev/
```

For example, a branch called `feature/test-deployment` will generate a preview at:

```
https://feature-test-deployment.website-a8e.pages.dev/
```

When you open a pull request, the Cloudflare bot will also comment with a link to the preview.

---

## 📦 Important Notes

- Do **not** commit the `_site/` directory.
- Avoid changes to protected files like `.gitignore` or GitHub Actions unless explicitly needed.
- Preview your changes locally or use the Cloudflare preview before merging to main.

For more background, visit the [Wiki](https://github.com/wnlgamers/website/wiki/Site-Configuration).

Happy contributing! 🎲
