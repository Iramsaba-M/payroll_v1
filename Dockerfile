# Use a base image with Node.js pre-installed
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Add npm global bin to PATH
ENV PATH /root/.npm-global/bin:$PATH

# Configure npm to install packages globally without requiring sudo
ENV NPM_CONFIG_PREFIX=/root/.npm-global

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies, including potentially broken ones
RUN npm install --production --force

# Install Vite globally
RUN npm install -g vite

# Copy the Vite configuration file
COPY vite.config.js .

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the React app will run on
EXPOSE 3000

# Define the command to run the React app
CMD ["npm", "run", "dev"]