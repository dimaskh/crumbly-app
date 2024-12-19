import os
import requests
from PIL import Image
from io import BytesIO

def download_and_process_image(url, output_path, target_width=800):
    try:
        # Download image
        response = requests.get(url)
        response.raise_for_status()
        
        # Open image and convert to RGB
        img = Image.open(BytesIO(response.content))
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
            
        # Calculate new height maintaining aspect ratio
        aspect_ratio = img.height / img.width
        target_height = int(target_width * aspect_ratio)
        
        # Resize image
        img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        # Save image with high quality
        img.save(output_path, 'JPEG', quality=85, optimize=True)
        print(f"Successfully downloaded and processed: {output_path}")
        
    except Exception as e:
        print(f"Error processing {url}: {str(e)}")

# Image URLs (high-quality, free-to-use images)
images = {
    "croissants.jpg": "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "danish-pastry.jpg": "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    "bread-pudding.jpg": "https://images.unsplash.com/photo-1586767003402-8ade266deb64",
    "chocolate-bark.jpg": "https://images.unsplash.com/photo-1599599810769-bcde5a160d32",
    "chocolate-strawberries.jpg": "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4",
    "dark-chocolate-truffles.jpg": "https://images.unsplash.com/photo-1481391319762-47dff72954d9"
}

# Ensure the images directory exists
output_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'images')
os.makedirs(output_dir, exist_ok=True)

# Download and process each image
for filename, url in images.items():
    output_path = os.path.join(output_dir, filename)
    download_and_process_image(url, output_path)
