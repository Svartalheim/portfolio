# Use a minimal Node.js image as the base
FROM node:alpine AS build

# Copy the rest of the application code
COPY . ./app
WORKDIR /app

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Use a minimal Nginx image as the base for serving static content
FROM nginx:alpine

# Copy built files from the previous stage to the nginx directory
COPY --from=build /build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]