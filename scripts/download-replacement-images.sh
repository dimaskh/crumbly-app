#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading replacement dessert images..."

# Pain au Chocolat
curl -L -o public/images/pain-au-chocolat.jpg "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=85"

# Raspberry Danish
curl -L -o public/images/raspberry-danish.jpg "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=85"

echo "Replacement images downloaded successfully!"
