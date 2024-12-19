#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading new pastry image..."

# Almond Croissants
curl -L -o public/images/almond-croissants.jpg "https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=85"

echo "New pastry image downloaded successfully!"
