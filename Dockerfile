# Stage 1: Build the app
FROM node:20 AS builder

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
