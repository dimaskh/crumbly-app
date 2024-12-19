#!/bin/bash

# Create the about images directory if it doesn't exist
mkdir -p public/images/about

# Download baking process images
curl -L -o public/images/about/baking-1.jpg "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=2400&h=1600&fit=crop" # Kneading dough
curl -L -o public/images/about/baking-2.jpg "https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=2400&h=1600&fit=crop" # Rolling pie crust
curl -L -o public/images/about/baking-3.jpg "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=2400&h=1600&fit=crop" # Piping cream
curl -L -o public/images/about/baking-4.jpg "https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=2400&h=1600&fit=crop" # Mixing ingredients
curl -L -o public/images/about/baking-5.jpg "https://images.unsplash.com/photo-1591437509461-321d2307ca70?q=80&w=2400&h=1600&fit=crop" # Final decoration

echo "Downloaded about section images successfully!"
