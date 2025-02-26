FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the application port (Make sure your app runs on this port)
EXPOSE 5137

# Start the application
CMD ["npm", "run", "dev"]
