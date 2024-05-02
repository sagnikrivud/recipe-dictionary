#!/bin/bash

# Define the paths relative to the script's location
assets_dir="./src/assets"
backup_dir="./backup"

# Create a date suffix for the zip file
date_suffix=$(date +'%Y-%m-%d')

# Define the name of the zip file with the date suffix
zip_file="assets_backup_$date_suffix.zip"

# Navigate to the assets directory
cd "$assets_dir" || exit

# Create a backup zip file with the date suffix
zip -r "../$backup_dir/$zip_file" .

# Print a message indicating the backup completion
echo "Backup completed: $backup_dir/$zip_file"