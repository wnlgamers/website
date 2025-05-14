# Contributing to the WNL Gamers Website

Thanks for helping out! Here's how you can contribute:

---

## 💡 Suggesting Updates

- Visit the [Issues section](https://github.com/wnlgamers/website/issues).
- Create a new issue describing your suggestion or bug report.
- You can also comment on an existing issue if you'd like to contribute ideas.

---

## ✏️ Quick Edit (for small text changes like bios)

Want to make a small update to your page?

1. Go to the file (e.g. `_data/hosts.yml`) on the GitHub site.
2. Click the pencil ✏️ icon to edit.
3. GitHub will help you create a new branch automatically.
4. Click **"Propose changes"** and then **"Create pull request"**.
5. That’s it! We’ll review and merge it.

🔐 Note: You can’t edit `main` directly — this keeps things safe and reviewable!

---

## 👥 Who Can Contribute

If you're a **member of the WNL Gamers GitHub organisation**, you can create branches and submit pull requests directly from this repository.

If you're **not a member**, you can still contribute — just follow the steps below:

### ✏️ For Non-Members: How to Contribute

1. **Fork the repository**  
   - Click the **"Fork"** button at the top right of the repo page.

2. **Clone your forked copy locally** *(optional)*  
   ```bash
   git clone https://github.com/your-username/website.git
   cd website
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-change-name
   ```

4. **Make your changes and commit them**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin feature/your-change-name
   ```

5. **Submit a pull request** from your fork to the `main` branch of the original repo.

---

### 🔐 Want to Become a Member?

If you're a regular contributor and would like to join the WNL Gamers GitHub organisation:

- Send an email to [info@wnlgamers.uk](mailto:info@wnlgamers.uk) with your GitHub username.
- We'll review and invite you if appropriate.

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
![image](https://github.com/user-attachments/assets/d6acc17a-a421-422c-8193-abf9be09a3c8)

---

## 📦 Important Notes

- Do **not** commit the `_site/` directory.
- Avoid changes to protected files like `.gitignore` or GitHub Actions unless explicitly needed.
- Preview your changes locally or use the Cloudflare preview before merging to main.

For more background, visit the [Wiki](https://github.com/wnlgamers/website/wiki/Site-Configuration).

Happy contributing! 🎲
