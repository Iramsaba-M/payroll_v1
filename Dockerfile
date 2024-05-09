# Use Node.js 18 as base image
FROM node:18

# Set working directory
WORKDIR /app

# Install create-vite globally
RUN npm install -g create-vite

# Copy package.json and package-lock.json if applicable
COPY package*.json ./

# Install dependencies with --force flag
RUN npm install --force

# Copy the rest of the application
COPY . .

# Expose port 5173!
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
