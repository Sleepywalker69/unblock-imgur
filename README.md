# Unblock Imgur (Manifest V3)

Loads Imgur content via a Rimgo mirror instance, bypassing regional blocks and fixing broken embeds.

## What this extension does
This extension automatically redirects all `imgur.com` links to a working Rimgo instance (`rimgo.pussthecat.org`). It allows you to view Imgur content in regions where it is banned.

**Key Features:**
* **Automatic Redirection:** Seamlessly sends `imgur.com` traffic to `rimgo.pussthecat.org`.
* **Direct Image Unwrapping:** Automatically detects when you are viewing a single image on Rimgo and redirects you to the raw image file, bypassing the UI.
* **Forum Embed Fixer:** Proactively finds broken Imgur embeds (hotlinked images) on forums and websites and rewrites them to load via Rimgo.
* **Privacy Preserving:** Strips "Referrer" headers from embedded images to prevent the mirror from blocking them as "hotlinks."

## Changes in Version 0.6
* **Manifest V3:** Fully updated to meet modern Chrome Web Store security and performance standards.
* **Rimgo Backend:** Replaced the broken DuckDuckGo proxy with a reliable Rimgo instance.
* **Embed Support:** Added a specialized script to fix `[img]` tags on third-party forums.

## How to install

### Developer Mode (Manual)
1.  Download or clone this repository.
2.  Open your browser and go to `chrome://extensions/` (Chrome/Edge/Brave) or `about:debugging` (Firefox).
3.  Enable **Developer Mode** (usually a toggle in the top right).
4.  Click **"Load unpacked"**.
5.  Select the folder containing these files.

## Disclaimer
This extension uses a public Rimgo instance (`rimgo.pussthecat.org`). If this instance goes offline, you can edit `rules.json` and `forum_fix.js` to point to a different working instance.
