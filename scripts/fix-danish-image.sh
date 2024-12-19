#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading new Raspberry Danish image..."

# Raspberry Danish (alternative image)
curl -L -o public/images/raspberry-danish.jpg "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=85"

echo "New Raspberry Danish image downloaded successfully!"
