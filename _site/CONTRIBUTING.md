# Contributing to WNL Gamers Website

Thanks for your interest in contributing to the WNL Gamers website!

This project is built with [Jekyll](https://jekyllrb.com) and deployed using [Cloudflare Pages](https://pages.cloudflare.com/). All updates are automatically built and deployed based on branch activity.

## Workflow

- **Production site**: Deployed from the `main` branch to [https://www.wnlgamers.uk](https://www.wnlgamers.uk)
- **Staging site**: Deployed from the `staging` branch to [https://staging.wnlgamers.uk](https://staging.wnlgamers.uk)

---

## 🧭 Contribution Process

To ensure changes are reviewed and tested before going live, **please open pull requests against the `staging` branch**, not `main`.

### ✅ Steps to Contribute

1. **Fork** this repository, or create a feature branch if you're a team member.
2. **Create a branch** for your changes:
   ```
   git checkout -b feature/my-awesome-update
   ```
3. **Make your changes** and **test locally**:
   ```
   bundle install
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` to preview the site.
4. **Open a pull request** into the `staging` branch with a clear description.
5. The team will review your changes and, if ready, merge them into `main`.

---

## ✨ Tips

- Keep pull requests focused — one clear improvement per PR is ideal.
- If you're unsure about anything, open a draft PR or ask in the repo's Discussions.
- Don’t commit the `_site/` folder — it's automatically generated and excluded.

Thanks for helping us make WNL Gamers even better!
