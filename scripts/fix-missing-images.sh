#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading fixed dessert images..."

# Blueberry Crumble Pie (new correct image)
curl -L -o public/images/blueberry-crumble-pie.jpg "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=85"

# Pain au Chocolat (better image)
curl -L -o public/images/pain-au-chocolat.jpg "https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=85"

# Raspberry Danish (better image)
curl -L -o public/images/raspberry-danish.jpg "https://images.unsplash.com/photo-1586401784499-0cbeab018a9f?w=800&q=85"

echo "Fixed images downloaded successfully!"
