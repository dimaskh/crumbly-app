#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading new dessert image..."

# Lemon Tart (replacing Pain au Chocolat)
curl -L -o public/images/lemon-tart.jpg "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=800&q=85"

echo "New dessert image downloaded successfully!"
