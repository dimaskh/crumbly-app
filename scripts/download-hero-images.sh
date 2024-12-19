#!/bin/bash

# Get the absolute path to the project root
PROJECT_ROOT="/Users/artsvit/Library/Mobile Documents/com~apple~CloudDocs/XCode/cake-site"

# Create hero images directory if it doesn't exist
mkdir -p "$PROJECT_ROOT/public/images/hero"

# Array of dark dessert image URLs
declare -a IMAGES=(
    "https://images.unsplash.com/photo-1624353365286-3f8d62daad51"  # Dark chocolate desserts
    "https://images.unsplash.com/photo-1599599810769-bcde5a160d32"  # Dark chocolate cake
    "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344"  # Chocolate tart
    "https://images.unsplash.com/photo-1611329695518-1763319aeeb1"  # Dark chocolate truffles
    "https://images.unsplash.com/photo-1617805147067-43b8539ea8df"  # Chocolate cake with berries
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"  # Dark chocolate mousse
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587"  # Chocolate dessert platter
    "https://images.unsplash.com/photo-1616486447077-f8d3f7bae6b7"  # Dark chocolate brownies
    "https://images.unsplash.com/photo-1603901926074-144ac4577b85"  # Chocolate tart with gold
    "https://images.unsplash.com/photo-1547047803-fa4a5f94fdf7"  # Dark chocolate cake slice
)

# Download each image
for i in "${!IMAGES[@]}"; do
    echo "Downloading hero image $((i+1)) of ${#IMAGES[@]}..."
    curl "${IMAGES[$i]}?q=80&w=2400" -o "$PROJECT_ROOT/public/images/hero/hero-$((i+1)).jpg"
done

echo "✅ Downloaded all hero images"
