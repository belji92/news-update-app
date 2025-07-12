# Dockerfile (for admin-app)

FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files from admin-app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source
COPY . .

# Expose the admin port (adjust if needed)
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
