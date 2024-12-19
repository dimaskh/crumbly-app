#!/bin/bash

# Get the absolute path to the project root
PROJECT_ROOT="/Users/artsvit/Library/Mobile Documents/com~apple~CloudDocs/XCode/cake-site"

# Create images directory if it doesn't exist
mkdir -p "$PROJECT_ROOT/public/images"

# Download new hero image - dark moody dessert photo (landscape)
curl "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2400" -o "$PROJECT_ROOT/public/images/hero-dark-dessert.jpg"

echo "✅ Downloaded new hero image"
