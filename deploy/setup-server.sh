#!/bin/bash

# EVYA Server Setup Script
# Run as root on Ubuntu 22.04+

set -e

echo "=== EVYA Server Setup ==="

# Update system
echo "Updating system..."
apt update && apt upgrade -y

# Install Node.js 22
echo "Installing Node.js 22..."
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

# Install pnpm
echo "Installing pnpm..."
corepack enable
corepack prepare pnpm@9.15.1 --activate

# Install PM2
echo "Installing PM2..."
npm install -g pm2

# Install Nginx
echo "Installing Nginx..."
apt install -y nginx

# Install Certbot for SSL
echo "Installing Certbot..."
apt install -y certbot python3-certbot-nginx

# Create MySQL user and database
echo "Setting up MySQL..."
mysql -u root -p <<EOF
CREATE DATABASE IF NOT EXISTS evya CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'evya'@'localhost' IDENTIFIED BY 'Dlr235672.-Yt';
GRANT ALL PRIVILEGES ON evya.* TO 'evya'@'localhost';
FLUSH PRIVILEGES;
EOF

# Create app directory
echo "Creating app directory..."
mkdir -p /var/www/evya
chown -R $USER:$USER /var/www/evya

# Clone repository (run this part manually)
echo ""
echo "=== Manual Steps Required ==="
echo ""
echo "1. Clone the repository:"
echo "   cd /var/www/evya"
echo "   git clone https://github.com/fatihtunali/evya.git ."
echo ""
echo "2. Install dependencies:"
echo "   pnpm install"
echo ""
echo "3. Create .env file:"
echo "   cp .env.example .env"
echo "   # Edit .env with your production values"
echo ""
echo "4. Generate Prisma client and push schema:"
echo "   pnpm db:generate"
echo "   pnpm db:push"
echo ""
echo "5. Build the applications:"
echo "   pnpm build"
echo ""
echo "6. Copy nginx config:"
echo "   cp deploy/nginx.conf /etc/nginx/sites-available/evya"
echo "   ln -s /etc/nginx/sites-available/evya /etc/nginx/sites-enabled/"
echo "   rm /etc/nginx/sites-enabled/default"
echo "   nginx -t && systemctl reload nginx"
echo ""
echo "7. Get SSL certificates:"
echo "   certbot --nginx -d eskisiniveryenisinial.com -d www.eskisiniveryenisinial.com"
echo "   certbot --nginx -d api.eskisiniveryenisinial.com"
echo ""
echo "8. Start with PM2:"
echo "   pm2 start deploy/ecosystem.config.js"
echo "   pm2 save"
echo "   pm2 startup"
echo ""
echo "=== Setup Complete ==="
