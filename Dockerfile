# Use a specific version of Node.js
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install create-vite globally
RUN npm install -g create-vite

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the React app will run on
EXPOSE 5173

# Define the command to run the React app
CMD ["npm", "run", "dev"]
