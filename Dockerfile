# Use an official Node.js image as the base image
FROM node:22-alpine as base

# Set the working directory in the container
WORKDIR /app

# Install pnpm for faster and more reliable dependency management
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Generate Prisma client and push schema to the database
RUN npx prisma generate && npx prisma db push --accept-data-loss

# Build the Next.js application
RUN pnpm run build

# Start the Next.js application in production mode
CMD ["pnpm", "start"]

# Expose the port Next.js runs on
EXPOSE 3003
