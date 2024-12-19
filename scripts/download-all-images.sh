#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading hero image..."
# Hero image - beautiful cake display
curl -L -o public/images/hero-cake.jpg "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=1920&q=90"

echo "Downloading recipe images..."

# Cakes
curl -L -o public/images/chocolate-cake.jpg "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85"
curl -L -o public/images/vanilla-cheesecake.jpg "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=85"
curl -L -o public/images/strawberry-shortcake.jpg "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=85"
curl -L -o public/images/black-forest.jpg "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=85"
curl -L -o public/images/tiramisu.jpg "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=85"
curl -L -o public/images/matcha-cake.jpg "https://images.unsplash.com/photo-1583266601312-b6c0d6ba3b17?w=800&q=85"

# Cookies and Brownies
curl -L -o public/images/chocolate-cookies.jpg "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=85"
curl -L -o public/images/caramel-brownies.jpg "https://images.unsplash.com/photo-1611625877932-6b0aa308b64b?w=800&q=85"
curl -L -o public/images/choc-chip-cookies.jpg "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=85"

# Pies
curl -L -o public/images/lemon-meringue.jpg "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=85"
curl -L -o public/images/apple-pie.jpg "https://images.unsplash.com/photo-1621743478914-cc8a86d7e9e5?w=800&q=85"
curl -L -o public/images/blueberry-pie.jpg "https://images.unsplash.com/photo-1525151498231-bc059cfafa2b?w=800&q=85"

# Cupcakes and Muffins
curl -L -o public/images/red-velvet-cupcakes.jpg "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=85"
curl -L -o public/images/apple-muffins.jpg "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=85"

# Special Desserts
curl -L -o public/images/truffles.jpg "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?w=800&q=85"
curl -L -o public/images/panna-cotta.jpg "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=800&q=85"
curl -L -o public/images/macarons.jpg "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=85"
curl -L -o public/images/creme-brulee.jpg "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=85"

# New Additions
curl -L -o public/images/raspberry-tart.jpg "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=85"
curl -L -o public/images/banana-bread.jpg "https://images.unsplash.com/photo-1592863288184-77b5857c10e0?w=800&q=85"
curl -L -o public/images/chocolate-mousse.jpg "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&q=85"

echo "All images downloaded successfully!"
