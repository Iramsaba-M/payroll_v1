# Use a base image with Node.js pre-installed
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies including Vite locally
RUN npm install --production --force
RUN npm install vite --save-dev

# Copy the Vite configuration file and the rest of the application code to the working directory
COPY . .

# Expose the port that the React app will run on
EXPOSE 3000

# Define the command to run the React app
CMD ["npm", "run", "dev"]
