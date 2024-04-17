# Use a base image with Node.js pre-installed
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies, forcing installation to accept potentially broken dependency resolution
RUN npm install --production --force

# Install Vite globally
RUN npm install -g vite

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the React app will run on
EXPOSE 3000

# Define the command to run the React app
CMD ["npm", "run", "dev"]

