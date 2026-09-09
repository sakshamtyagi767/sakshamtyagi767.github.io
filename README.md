# Saksham Tyagi — Personal Website & Portfolio

Live Website: [https://sakshamtyagi767.github.io](https://sakshamtyagi767.github.io)

This repository contains the source code for my personal engineering portfolio website.

---

## 💭 Why I Built This

When building my portfolio, I wanted to avoid generic dark-mode templates, flashy glowing neon borders, and third-party framework bloat. Instead, I designed this site around three core principles:

1. **Lightweight & Fast**: Built with pure HTML5, vanilla CSS, and modern JavaScript. Zero external npm dependencies, zero build steps, and instant load time.
2. **Warm Minimalist Aesthetic**: Editorial sand & paper palette (`#f5f0e8`) with sharp typography (`Space Grotesk`, `DM Sans`, `JetBrains Mono`) that feels clean, readable, and human-built.
3. **Interactive Proof of Work**: Rather than just listing project descriptions, each project includes an embedded interactive client-side simulator (RFM cohort explorer, AsyncIO concurrency benchmark, n8n node workflow inspector, and CLI terminal emulator).

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: HTML5, Vanilla CSS3 (CSS Variables, Flexbox/Grid, Hardware-Accelerated Keyframes), JavaScript (ES6+, DOM API, IntersectionObserver).
- **Typography**: Google Fonts (`Space Grotesk`, `DM Sans`, `JetBrains Mono`).
- **Testing**: Python 3.10+ `unittest` suite (`test_portfolio.py`) for HTML structure, link validation, and data schema integrity.
- **Hosting**: GitHub Pages (automatically deployed from the `main` branch).

---

## 📂 Project Showcase Featured on Site

| Project | Key Technologies | Interactive Feature |
| :--- | :--- | :--- |
| **Retail Customer Analytics** | Python, Pandas, RFM Analysis, Streamlit | Interactive RFM Cohort Explorer |
| **Market Pulse Financial Analytics** | Python, AsyncIO, NumPy, Matplotlib | Live Concurrency Benchmark Visualizer (~40% latency reduction) |
| **Automated Email Pipeline** | n8n, Gmail API, LangChain | Step-by-step n8n Node Workflow Inspector |
| **System Performance Monitor** | Python, `psutil`, `pytest` | Interactive Terminal Simulator + `pytest` suite viewer |

---

## 🧪 Local Development & Running Tests

Because this project uses vanilla web technologies, no installation or `npm install` is required.

### 1. View Locally
Simply clone the repository and open `index.html` in your web browser:
```bash
git clone https://github.com/sakshamtyagi767/sakshamtyagi767.github.io.git
cd sakshamtyagi767.github.io
```
Open `index.html` directly in Chrome, Firefox, or VS Code Live Server.

### 2. Run Python Unit Tests
I've included a Python 3.10+ unit test suite to validate portfolio integrity and links before pushing changes:
```bash
python test_portfolio.py
```

---

## 📬 Connect With Me

- **Email**: [sakshamtyagi767@gmail.com](mailto:sakshamtyagi767@gmail.com)
- **GitHub**: [github.com/sakshamtyagi767](https://github.com/sakshamtyagi767)
- **LinkedIn**: [linkedin.com/in/saksham-tyagi-672866281](https://www.linkedin.com/in/saksham-tyagi-672866281/)
- **LeetCode**: [leetcode.com/u/saksham767](https://leetcode.com/u/saksham767/)
