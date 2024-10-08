---
title: Automating Nginx and SSL Setup with Bash Scripts
description: Learn how to automate Nginx and SSL setup on your server using simple Bash scripts.
publishedDate: "2024-10-08"
author: Yug Bhanushali
readTime: "6 min read"
tags: ["Nginx", "SSL", "Bash Scripts", "Certbot", "Automation"]
---

Setting up Nginx and SSL for your server can be a tedious task if done manually. Thankfully, with a bit of automation, you can easily streamline the process using Bash scripts. In this blog, I'll walk you through two simple Bash scripts: one for configuring Nginx and another for setting up SSL using Certbot. These scripts will make your life easier by automating the setup process, so you can focus more on development rather than server management.

### Script 1: Automate Nginx Configuration

This first script automates the setup of Nginx for a domain and proxying traffic to an internal application running on a specific port.

#### Steps Covered in the Script:

1. **Input Parameters**: Takes the domain and port as inputs.
2. **Install Nginx**: Ensures Nginx is installed on the server.
3. **Nginx Server Block Creation**: Dynamically creates an Nginx configuration file based on the input domain and port.
4. **Enable Configuration**: Links the configuration and restarts Nginx.

#### The Script:

```bash
#!/bin/bash

# Usage: ./setup_nginx.sh <domain> <port>

# Input parameters
DOMAIN=$1
PORT=$2

# Check if domain and port are provided
if [ -z "$DOMAIN" ] || [ -z "$PORT" ]; then
    echo "Usage: $0 <domain> <port>"
    exit 1
fi

NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"
NGINX_CONF_LINK="/etc/nginx/sites-enabled/$DOMAIN"

# Update and install Nginx
echo "Updating system and installing Nginx..."
sudo apt update
sudo apt install nginx -y

# Create Nginx server block dynamically based on domain and port
echo "Configuring Nginx for $DOMAIN..."
if [ ! -f "$NGINX_CONF" ]; then
    sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
else
    echo "Nginx config for $DOMAIN already exists."
fi

# Enable Nginx config
if [ ! -f "$NGINX_CONF_LINK" ]; then
    sudo ln -s $NGINX_CONF $NGINX_CONF_LINK
    echo "Nginx configuration for $DOMAIN enabled."
else
    echo "Nginx configuration already enabled."
fi

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "Nginx setup for $DOMAIN on port $PORT is complete."
```

#### How It Works:

- This script takes two arguments: the domain and the port.
- It checks if Nginx is installed and, if not, installs it.
- The server block for Nginx is created based on the domain and port provided, enabling you to proxy traffic to your web app.
- Finally, the configuration is linked and Nginx is restarted.

### Script 2: Automate SSL Configuration with Certbot

Once you have your Nginx server set up, the next step is to secure it using SSL. Certbot makes this process straightforward, and we can automate it using the following script.

#### Steps Covered in the Script:

1. **Input Parameters**: Takes the domain and your email as inputs.
2. **Install Certbot**: Installs Certbot and its dependencies.
3. **Obtain SSL Certificate**: Uses Certbot to automatically generate and configure the SSL certificate for your domain.
4. **Reload Nginx**: Ensures Nginx is reloaded to apply the new SSL settings.

#### The Script:

```bash
#!/bin/bash

# Usage: ./setup_ssl.sh <domain> <email>

# Input parameters
DOMAIN=$1
EMAIL=$2

# Check if domain and email are provided
if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
    echo "Usage: $0 <domain> <email>"
    exit 1
fi

# Install Certbot and necessary dependencies
echo "Installing Certbot and necessary dependencies..."
sudo apt update
sudo apt install certbot python3-certbot-nginx -y

# Obtain an SSL certificate and configure Nginx
echo "Obtaining SSL certificate for $DOMAIN..."
sudo certbot --nginx --non-interactive --agree-tos --redirect -d $DOMAIN -m $EMAIL

# Reload Nginx to apply SSL
echo "Reloading Nginx to apply SSL certificate..."
sudo systemctl reload nginx

echo "SSL setup for $DOMAIN is complete."
```

#### How It Works:

- This script takes the domain and your email as inputs.
- Certbot is installed along with any required dependencies.
- Certbot then automatically generates the SSL certificate for your domain and updates the Nginx configuration to use HTTPS.
- Nginx is reloaded to apply the changes.

### How to Use the Scripts

1. **Nginx Setup**:
   Run the Nginx script by providing your domain and the port number on which your app is running.
   ```bash
   ./setup_nginx.sh example.com 3000
   ```
2. **SSL Setup**:
   After setting up Nginx, run the SSL script to secure your domain with an SSL certificate.
   ```bash
   ./setup_ssl.sh example.com your-email@example.com
   ```

### Conclusion

By combining these two scripts, you can automate the entire process of setting up Nginx and SSL on your server. This approach not only saves time but also reduces the chance of errors when configuring the server manually. Once set up, your web application will be accessible over HTTPS with a valid SSL certificate.

Feel free to adapt these scripts to your specific use cases and make your server management more efficient!
