# CloudVault — README

[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/YOUR_USERNAME/cloudvault-app/build-pc.yml?branch=main&label=PC%20build)](https://github.com/YOUR_USERNAME/cloudvault-app/actions/workflows/build-pc.yml)

![CloudVault Logo](https://raw.githubusercontent.com/YOUR_USERNAME/cloudvault-app/main/public/cloudvault-logo.png)

**CloudVault** is a native PC + Android + Web app that unifies your cloud files. Connect Google Drive, OneDrive, and Dropbox in one elegant interface. Browse files, play media, and download with one click — no more juggling tabs.

## ✨ Features

- ☁️ **Unified Cloud Browser** — Connect all three major clouds in one app
- 🎬 **4K Media Player** — Stream videos & audio with full controls (play/pause, volume, speed, fullscreen)
- 🖼️ **Image Gallery** — Browse images with preview and download options
- ⚡ **Fast Downloads** — Generate shareable download links instantly
- 🔒 **Secure OAuth** — Your tokens live in the OS keychain; never hit our servers
- 📱 **All Platforms** — PC (.exe), Android (APK), and GitHub Pages (web)

## 🛠 Tech Stack

- **Desktop (PC)**: Tauri + Rust + React + TypeScript
- **Mobile (Android)**: Capacitor + React + TypeScript
- **Web**: GitHub Pages + React + TypeScript

## 🚀 Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cloudvault-app.git
   cd cloudvault-app
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Run locally (PC/desktop dev server):
   ```bash
   npm run dev
   ```

4. Build the Tauri PC app (production .exe):
   ```bash
   npm run tauri
   ```

5. Build Android APK (Capacitor):
   ```bash
   cd android && ./gradlew assembleDebug
   ```

6. Deploy website to GitHub Pages (CI/CD handles this automatically on push):

## 📦 GitHub Actions

- **Build PC**: Windows runner builds the Tauri .exe (via `tauri-action`)
- **Build Android**: Ubuntu runner builds the Capacitor APK
- **Deploy Website**: Builds static site and deploys to GitHub Pages

## 📁 Project Structure

```
cloudvault-app/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page routes (Landing, Dashboard, MediaPlayer)
│   ├── services/           # Cloud integrations (mock & real APIs)
│   ├── hooks/              # Custom hooks (file operations)
│   ├── utils/              # Utility functions
│   ├── styles/             # CSS global styles
│   ├── App.tsx            # React Router routes
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts       # Vite types
├── src-tauri/
│   ├── src/               # Tauri Rust core (commands, types)
│   ├── tauri.conf.json    # Tauri config (devtools, capabilities, CSP)
│   └── Cargo.toml         # Rust dependencies
├── android/                # Capacitor Android project (generated)
├── .github/workflows/      # CI/CD pipelines
└── README.md              # This file
```

## 🔐 Cloud Setup (OAuth)

To connect real cloud services:

- Go to each provider's developer console and register a new application
- Add appropriate redirect URIs based on your build target (desktop, Android, web)
- Use the client ID + redirect URI in CloudVault's OAuth config
- Tokens are stored locally (OS keychain / Capacitor secure storage)

*Mock authentication is built-in for demo; replace with real OAuth later.*

## 📱 Build Targets

- **PC App**: `npm run tauri` → `src-tauri/target/release/bundle/nsis/CloudVault.exe`
- **Android APK**: `cd android && ./gradlew assembleDebug` → `app/build/outputs/apk/debug/app-debug.apk`
- **Web App**: `npm run build` → `dist/` ready for GitHub Pages

## 📄 License

MIT — see `LICENSE` (add when you push to GitHub).

## 🌐 Live Demo (Coming Soon)

Once CI/CD is configured with your GitHub repo, you’ll get a live demo link.
