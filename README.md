# Saksham Tyagi — Personal Engineering Portfolio

A human-built, warm minimalist portfolio website designed for **Saksham Tyagi** (AI/ML Engineer, Data Analyst, & Backend Developer).

---

## 🌟 Features
- **Warm Minimalist Aesthetic**: Terracotta, sand, and dark obsidian palette with custom typography (`Space Grotesk`, `DM Sans`, `JetBrains Mono`).
- **Interactive Live Demos**:
  1. *Retail Customer Analytics Dashboard*: Live RFM Cohort Explorer (Champions, Loyal, At-Risk, Hibernating).
  2. *Market Pulse Financial Analytics Dashboard*: Sync vs AsyncIO Concurrency Benchmark Simulator (~40% latency cut visualizer).
  3. *Automated Email Processing Pipeline*: n8n Workflow Node Inspector (Gmail API -> LangChain -> Batch Control -> Auto Responder).
  4. *System Performance Monitor & Analyzer*: Live CLI Terminal Simulator + Pytest Test Suite View (21 unit tests).
- **Technical Skills Bento Grid**: Data & ML, Backend APIs (FastAPI, REST), Automation (n8n, LangChain), Databases (MySQL, MongoDB, Redis), DevOps (Docker, Linux, AWS).
- **Contact & Profiles**: Integrated GitHub, LinkedIn, LeetCode, Direct Email copy action, and quick message form.
- **Python 3.10+ Unit Tests**: Embedded `test_portfolio.py` suite.

---

## 🚀 How to Publish Live for FREE (Step-by-Step)

### Option 1: GitHub Pages (Recommended — `sakshamtyagi767.github.io`)

1. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name the repository: `sakshamtyagi767.github.io` (or `portfolio`)
   - Make it **Public**

2. **Push your code to GitHub**:
   Open terminal inside `saksham-portfolio` folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release for Saksham Tyagi"
   git branch -M main
   git remote add origin https://github.com/sakshamtyagi767/sakshamtyagi767.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository **Settings** -> **Pages**.
   - Under **Source**, select `Deploy from a branch`.
   - Branch: `main` / Folder: `/ (root)` -> Click **Save**.
   - Your site will be live at: `https://sakshamtyagi767.github.io` in ~60 seconds!

---

### Option 2: Vercel (1-Click Free Hosting)

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New Project** -> Select `sakshamtyagi767.github.io` repository.
3. Click **Deploy**. Vercel will give you a free live URL (e.g. `saksham-tyagi.vercel.app`).

---

## 🧪 Running Unit Tests Locally

To run the Python unit test suite:
```bash
python -m unittest test_portfolio.py
```
