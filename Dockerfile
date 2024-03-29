FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV NODE_ENV=production

# Run server.js when the container launches
CMD ["node", "server.js"]