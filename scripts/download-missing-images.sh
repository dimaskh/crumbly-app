#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading missing recipe images..."

# Scones
curl -L -o public/images/lemon-lavender-scones.jpg "https://images.unsplash.com/photo-1484278786775-527ac0d0b608?w=800&q=85"

# Pies
curl -L -o public/images/pecan-pie.jpg "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=800&q=85"

# Pastries
curl -L -o public/images/chocolate-eclairs.jpg "https://images.unsplash.com/photo-1587536849024-daaa4a417b16?w=800&q=85"

echo "Missing images downloaded successfully!"
