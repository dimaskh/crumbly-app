#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading additional recipe images..."

# Brownies
curl -L -o public/images/salted-caramel-brownies.jpg "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=85"

# Pies
curl -L -o public/images/blueberry-crumble-pie.jpg "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=85"

# Truffles
curl -L -o public/images/dark-chocolate-truffles.jpg "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=85"

# Eclairs
curl -L -o public/images/chocolate-eclairs.jpg "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?w=800&q=85"

# Scones
curl -L -o public/images/lemon-lavender-scones.jpg "https://images.unsplash.com/photo-1586441132793-36786f9891e3?w=800&q=85"

echo "Additional images downloaded successfully!"
