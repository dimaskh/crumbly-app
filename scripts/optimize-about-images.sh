#!/bin/bash

# Create a temporary directory for optimized images
mkdir -p public/images/about/optimized

# Install ImageMagick if not already installed
if ! command -v convert &> /dev/null; then
    echo "Installing ImageMagick..."
    brew install imagemagick
fi

# Optimize each image
for img in public/images/about/baking-*.jpg; do
    filename=$(basename "$img")
    echo "Optimizing $filename..."
    
    # Use ImageMagick to optimize the image:
    # - Resize to max 1600x1200 while maintaining aspect ratio
    # - Strip metadata
    # - Apply progressive JPEG
    # - Optimize quality
    convert "$img" \
        -resize "1600x1200>" \
        -strip \
        -interlace Plane \
        -quality 82 \
        -sampling-factor 4:2:0 \
        "public/images/about/optimized/$filename"
done

# Show size comparison
echo "Size comparison:"
echo "Original files:"
du -sh public/images/about/baking-*.jpg
echo "Optimized files:"
du -sh public/images/about/optimized/baking-*.jpg

# Replace original images with optimized versions
mv public/images/about/optimized/* public/images/about/
rmdir public/images/about/optimized

echo "Image optimization complete!"
