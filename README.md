# CannaVision AI - Rubicon Organics Platform

[![Public Web App](https://img.shields.io/badge/Public_Web_App-Live_24/7-10b981?style=for-the-badge&logo=react)](https://manish120889.github.io/cannavision-rubicon/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-cannavision--rubicon-181717?style=for-the-badge&logo=github)](https://github.com/Manish120889/cannavision-rubicon.git)

Enterprise plant-health intelligence platform specifically built for **Rubicon Organics** (Pacifica Facility in Delta, BC) matching FVOPA Organic & GACP standards.

---

## 🌐 Public Access & Links

* **GitHub Repository**: [https://github.com/Manish120889/cannavision-rubicon.git](https://github.com/Manish120889/cannavision-rubicon.git)
* **24/7 Public Live Web App**: [https://manish120889.github.io/cannavision-rubicon/](https://manish120889.github.io/cannavision-rubicon/)

---

## 💻 1-Click Public Website Hosting Setup

### Option A: Free Vercel / Netlify 24/7 Hosting (Recommended)
1. Log into [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Click **"Import Git Repository"** and select `Manish120889/cannavision-rubicon`.
3. Vercel/Netlify will automatically build and deploy it 24/7 with free SSL HTTPS certificates on your custom domain (`cannavision.rubiconorganics.com`)!

### Option B: Embed on Your Existing Website (`<iframe>`)
Add this HTML code to your company website:
```html
<iframe 
  src="https://manish120889.github.io/cannavision-rubicon/" 
  width="100%" 
  height="900px" 
  style="border: none; border-radius: 12px;"
  allow="camera; microphone; autoplay"
></iframe>
```

---

## 🚀 Local Development & Platform Variant Builds

### 1. Web Local Development
```bash
npm install
npm run dev
```

### 2. Desktop Standalone Executable Build (Windows/macOS)
```bash
npm run build:desktop
# Packaged binary is saved in release/
```

### 3. Android Mobile APK Build
```bash
npx cap add android
npx cap open android
```

### 4. iPhone (iOS) Native Mobile Build
```bash
npx cap add ios
npx cap open ios
```
