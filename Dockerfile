# Use a Node.js image with the desired version
FROM node:22.12.0-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy Prisma schema and .env for database operations during build
COPY prisma ./prisma
COPY .env ./.env

# Generate Prisma client and push schema to the database
# Ensure DATABASE_URL is available for this step as a build argument
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
RUN npx prisma generate
RUN npx prisma db push --accept-data-loss

# Build the Next.js application
COPY . .
RUN npm run build

# Production stage (smaller image for deployment)
FROM node:22.12.0-alpine as runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built application and essential files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3003

# Start the Next.js application
CMD ["npm", "start"]
