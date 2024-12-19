#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading fixed pastry images..."

# Pain au Chocolat (new image)
curl -L -o public/images/pain-au-chocolat.jpg "https://images.unsplash.com/photo-1597579582209-6c06e02190d1?w=800&q=85"

# Raspberry Danish (new image)
curl -L -o public/images/raspberry-danish.jpg "https://images.unsplash.com/photo-1600617547577-6307d699c132?w=800&q=85"

echo "Fixed pastry images downloaded successfully!"
