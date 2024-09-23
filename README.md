# Smart Web Automation and Content Scraping Assistant

This Chrome extension helps automate web tasks and scrape content from specific websites using Python integration through Native Messaging and JavaScript content scripts.

## Features

- **Content Scraping**: Extracts headings and paragraphs from target web pages.
- **Native Messaging**: Python integration via Chrome Native Messaging.
- **Cross-Site Compatibility**: Can scrape data from multiple sites like `example.com`.

## Tech Stack

- **JavaScript**: For handling popup UI and content scripts.
- **Python**: Backend functionality through Native Messaging.
- **HTML/CSS**: Popup interface for the extension.
- **Chrome Extensions API**: Browser-based automation and communication with active tabs.

## Project Structure

```plaintext
├── manifest.json              # Chrome extension configuration file
├── scripts/
│   ├── content.js             # Content script that scrapes web pages
│   ├── popup.js               # Logic for popup interactions
├── native-messaging/
│   ├── manifest.json          # Native messaging configuration
│   ├── native_messaging_handler.py # Python script for native messaging
├── html/
│   ├── popup.html             # HTML structure for popup window
├── styles/
│   ├── popup.css              # CSS for styling the popup
├── icons/
│   ├── icon16.png             # 16x16 icon for the extension
│   ├── icon48.png             # 48x48 icon for the extension
│   ├── icon128.png            # 128x128 icon for the extension
