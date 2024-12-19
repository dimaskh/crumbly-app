#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download a high-quality hero image
curl -L -o public/images/hero-cake.jpg "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=1920&q=90"

echo "Hero image downloaded successfully!"
