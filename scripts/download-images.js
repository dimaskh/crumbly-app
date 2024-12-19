const fs = require('fs');
const https = require('https');
const path = require('path');

const imageUrls = {
  'hero-about.jpg': 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920&q=80', // Bakery workspace
  'beginning.jpg': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1200&q=80', // Home baking
  'community.jpg': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80', // Baking class
  'virtual-class.jpg': 'https://images.unsplash.com/photo-1609749034367-1a5453315d15?w=1200&q=80', // Woman teaching online
  'testing-lab.jpg': 'https://images.unsplash.com/photo-1556910638-6cdac31d44dc?w=1200&q=80', // Professional kitchen
  'global.jpg': 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=1200&q=80', // International desserts
  'celebration.jpg': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80' // Celebration
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const targetDir = path.join(__dirname, '../public/images/about');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filepath = path.join(targetDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if there was an error
      console.error(`❌ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
};

async function downloadAllImages() {
  console.log('🚀 Starting image downloads...\n');

  try {
    const downloads = Object.entries(imageUrls).map(([filename, url]) => {
      return downloadImage(url, filename);
    });

    await Promise.all(downloads);
    console.log('\n✨ All images downloaded successfully!');
  } catch (error) {
    console.error('\n❌ Some images failed to download:', error);
    process.exit(1);
  }
}

downloadAllImages();
