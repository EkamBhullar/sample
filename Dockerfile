FROM node:alpine

# Set the working directory in the container
WORKDIR app



# Install dependencies
RUN npm install

# Copy the entire app to the working directory
COPY . .


# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
