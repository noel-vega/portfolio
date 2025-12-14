#!/bin/bash
set -e

# Clean previous build
rm -rf dist

# Compile Typescript
tsc

# Copy static assets
npx @tailwindcss/cli -i ./src/input.css -o ./dist/public/css/main.css
cp -r src/public dist
cp -r src/views dist

echo "Build completed"
