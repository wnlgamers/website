# WNL Gamers Website

A community-driven website for the Wootton board game group, built using Jekyll and hosted on GitHub Pages. This project provides a hub for board game enthusiasts with curated content, interactive lists, and event details.

## Features
- **Dynamic Geeklist Integration:** Displays games with thumbnails, descriptions, and links.
- **Responsive & Themed Design:** Built with Jekyll using a custom remote theme.
- **Universal Navigation:** Consistent navigation across the site.
- **Community Driven:** Easy for anyone to contribute.

## Getting Started

### Prerequisites

Before you begin, please ensure you have the following installed:

- **Git:** For version control.  
  Download from [git-scm.com](https://git-scm.com/).

- **Ruby:** Required to run Jekyll.  
  - **Windows:** Download from [rubyinstaller.org](https://rubyinstaller.org/).  
  - **macOS:** Often pre-installed; you can also use Homebrew (`brew install ruby`).  
  - **Linux:** Install via your package manager (e.g., `sudo apt install ruby-full`).

- **Bundler:** Ruby gem for managing dependencies. Install it with:
```bash
gem install bundler
```

- **Jekyll:** The static site generator. Install it by running:
```bash
gem install jekyll
```

*Tip:* If you’re new to these tools, check out their documentation:
- [Git Documentation](https://git-scm.com/doc)
- [Ruby Quickstart](https://www.ruby-lang.org/en/documentation/quickstart/)
- [Jekyll Getting Started](https://jekyllrb.com/docs/installation/)

### Setting Up Your Local Development Environment

There are two common approaches:

#### Option 1: Using the Command Line (General Method)

1. **Clone the Repository:**
   Open your terminal and run:
```bash
git clone https://github.com/wnlgamers/website.git
cd website
```

2. **Install Dependencies:**
   In the project directory, run:
```bash
bundle install
```

3. **Build and Serve the Site Locally:**
   Run:
```bash
bundle exec jekyll serve
```
   The site will be generated and served at [http://localhost:4000](http://localhost:4000).

4. **View Your Site:**
   Open your browser and navigate to [http://localhost:4000](http://localhost:4000). Jekyll will automatically rebuild the site when you save changes.

#### Option 2: Using Visual Studio Code

VS Code offers a user-friendly environment with built-in Markdown preview and an integrated terminal.

1. **Download and Install VS Code:**  
   Get it from [code.visualstudio.com](https://code.visualstudio.com/).

2. **Clone the Repository via VS Code:**
   - Open VS Code.
   - Go to **View > Terminal** to open the integrated terminal.
   - Run:
```bash
git clone https://github.com/wnlgamers/website.git
cd website
```

3. **Install Recommended Extensions:**
   - **Ruby Extension:** For Ruby syntax highlighting.
   - **Markdown All in One:** For enhanced Markdown support.

4. **Run Jekyll Within VS Code:**
   - In the integrated terminal, run:
```bash
bundle exec jekyll serve
```
   - Preview your site by opening [http://localhost:4000](http://localhost:4000) in your browser or by using an extension that provides an in-editor preview.

### Additional Tips

- **Using Multiple Config Files:**  
  If you need separate configurations for local development and production, you can create an additional configuration file (e.g., `_config_dev.yml`) with local settings (such as an empty `baseurl`) and run:
```bash
bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

- **Learning Resources:**  
  Explore tutorials on Git, Jekyll, and VS Code to become more comfortable with these tools.

## Contributing

We welcome contributions! See our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit pull requests and join the development process.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, please email [info@wnlgamers.uk](mailto:info@wnlgamers.uk) or open an issue in the repository.
