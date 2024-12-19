#!/bin/bash

# Create timestamp
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="cake-site_backup_${TIMESTAMP}"
BACKUP_DIR="/Users/artsvit/Library/Mobile Documents/com~apple~CloudDocs/XCode/cake-site_backups"

# Create backups directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create temporary directory for the backup
TEMP_DIR="${BACKUP_DIR}/${BACKUP_NAME}"
mkdir -p "$TEMP_DIR"

# Copy project files excluding unnecessary directories and files
rsync -av --progress ../ "$TEMP_DIR" \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude '*.log' \
  --exclude 'cake-site_backups'

# Create a version info file
echo "Backup created on: $(date)" > "${TEMP_DIR}/backup_info.txt"
echo "Project: Cake Site" >> "${TEMP_DIR}/backup_info.txt"
echo "Version: 1.0.0" >> "${TEMP_DIR}/backup_info.txt"
echo "Next.js Version: 15.0.3" >> "${TEMP_DIR}/backup_info.txt"

# Create zip archive
cd "$BACKUP_DIR"
zip -r "${BACKUP_NAME}.zip" "$BACKUP_NAME"

# Remove temporary directory
rm -rf "$TEMP_DIR"

echo "✅ Backup completed successfully!"
echo "📦 Backup location: ${BACKUP_DIR}/${BACKUP_NAME}.zip"
echo "📝 Backup includes:"
echo "   - All source code"
echo "   - Public assets"
echo "   - Configuration files"
echo "   - Scripts"
echo "   - Documentation"
