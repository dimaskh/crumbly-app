#!/bin/bash

# Create the baking images directory if it doesn't exist
mkdir -p ../public/images/baking

# Download baking action images
curl -o ../public/images/baking/baking-1.jpg "https://images.unsplash.com/photo-1556910633-5099dc3971e8?q=80&w=2400&h=1600&fit=crop"
curl -o ../public/images/baking/baking-2.jpg "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=2400&h=1600&fit=crop"
curl -o ../public/images/baking/baking-3.jpg "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?q=80&w=2400&h=1600&fit=crop"
curl -o ../public/images/baking/baking-4.jpg "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2400&h=1600&fit=crop"
curl -o ../public/images/baking/baking-5.jpg "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2400&h=1600&fit=crop"

echo "Downloaded baking images successfully!"
