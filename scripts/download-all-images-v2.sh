#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading hero image..."
# Hero image - beautiful cake display with rustic feel
curl -L -o public/images/hero-cake.jpg "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=1920&q=90"

echo "Downloading recipe images..."

# Cakes
curl -L -o public/images/chocolate-cake.jpg "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=85"
curl -L -o public/images/vanilla-cheesecake.jpg "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=85"
curl -L -o public/images/strawberry-shortcake.jpg "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=800&q=85"
curl -L -o public/images/black-forest.jpg "https://images.unsplash.com/photo-1551404973-761c83cd8339?w=800&q=85"
curl -L -o public/images/tiramisu.jpg "https://images.unsplash.com/photo-1542124948-dc391252a940?w=800&q=85"
curl -L -o public/images/matcha-cake.jpg "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=85"

# Cookies and Brownies
curl -L -o public/images/chocolate-cookies.jpg "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800&q=85"
curl -L -o public/images/caramel-brownies.jpg "https://images.unsplash.com/photo-1589114471223-dec0d8d05c1b?w=800&q=85"
curl -L -o public/images/choc-chip-cookies.jpg "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=800&q=85"

# Pies
curl -L -o public/images/lemon-meringue.jpg "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&q=85"
curl -L -o public/images/apple-pie.jpg "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800&q=85"
curl -L -o public/images/blueberry-pie.jpg "https://images.unsplash.com/photo-1490323914169-0e5a12e2e4c7?w=800&q=85"

# Cupcakes and Muffins
curl -L -o public/images/red-velvet-cupcakes.jpg "https://images.unsplash.com/photo-1612809076670-c93d4176e065?w=800&q=85"
curl -L -o public/images/apple-muffins.jpg "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=85"

# Special Desserts
curl -L -o public/images/truffles.jpg "https://images.unsplash.com/photo-1581399532901-11f0656cd8f0?w=800&q=85"
curl -L -o public/images/panna-cotta.jpg "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=85"
curl -L -o public/images/macarons.jpg "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=800&q=85"
curl -L -o public/images/creme-brulee.jpg "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=85"

# New Additions
curl -L -o public/images/raspberry-tart.jpg "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=85"
curl -L -o public/images/banana-bread.jpg "https://images.unsplash.com/photo-1594003715326-f6030861574b?w=800&q=85"
curl -L -o public/images/chocolate-mousse.jpg "https://images.unsplash.com/photo-1624001934657-640ae7574e5f?w=800&q=85"

echo "All images downloaded successfully!"
