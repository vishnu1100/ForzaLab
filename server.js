const express = require("express");
const path = require("path");
const fs = require("fs"); // Add this line

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "src" folder
app.use(express.static(path.join(__dirname, "src")));
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads"))); // Update uploads path


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});


// Route to get all images in uploads/images
app.get("/api/images", (req, res) => {
    const imagesDir = path.join(__dirname, "src", "uploads", "images"); // Corrected path


    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Unable to scan directory" });
        }

        // Filter only image files (optional)
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

        res.json(imageFiles);
    });
});





app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
