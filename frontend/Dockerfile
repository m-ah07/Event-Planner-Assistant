# Use an official Node.js image (Alpine is a lightweight variant)
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Expose port 3000 for the React dev server
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
