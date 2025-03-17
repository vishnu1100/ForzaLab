# ForzaLab Image Gallery

## 📌 Project Overview
ForzaLab is a simple **Node.js & Express** web app that dynamically displays images from the `uploads/images` folder using **Bootstrap** for styling. Images are loaded dynamically via an API endpoint.

## 🚀 Features
- **Express Server** to serve static files and API routes.
- **Dynamic Image Loading** from `uploads/images`.
- **Bootstrap Grid** for responsive layout (3 images per row).
- **Auto Image Detection** (no need to manually add images in HTML).

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/forzalab-image-gallery.git
cd forzalab-image-gallery
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Server
```sh
node server.js
```

Server will run at: **http://localhost:3000**

---

## 📁 Folder Structure
```
ForzaLab/
│── src/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # CSS styles (optional, Bootstrap used)
│── uploads/
│   ├── images/         # Image folder (auto-detected)
│── server.js          # Express server
│── package.json       # Dependencies & scripts
│── README.md          # Documentation
```

---

## 📌 API Endpoints
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | `/api/images` | Fetches all images from `uploads/images/` |

---

## 🖼 How It Works
1. The server serves static files and provides an API at `/api/images`.
2. On page load, JavaScript fetches the list of images from `/api/images`.
3. Each image is displayed in a Bootstrap grid using the `work__shout` class.

---

## 📜 License
This project is **open-source**. Feel free to use and modify it.

---

## 🎯 Author
[Your Name] - Developer & Maintainer

Happy Coding! 🚀

