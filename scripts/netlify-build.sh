#!/bin/bash
echo "🚀 Building EAAA for Netlify..."
echo "📅 Build date: $(date)"
echo "🔧 Node version: $(node --version)"
echo "📦 NPM version: $(npm --version)"

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Install dependencies
echo "📥 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Verify build
echo "✅ Verifying build..."
if [ -f "dist/index.html" ]; then
    echo "✅ index.html found"
else
    echo "❌ index.html missing"
    exit 1
fi

if [ -f "dist/assets/index-"*.js ]; then
    echo "✅ JS bundle found"
else
    echo "❌ JS bundle missing"
    exit 1
fi

echo "🎉 Build completed successfully!"
