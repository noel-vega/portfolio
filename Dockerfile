# Use Node.js LTS version
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
FROM base AS dependencies
RUN npm ci --only=production

# Install all dependencies (including dev dependencies) for build
FROM base AS build
RUN npm ci
COPY . .

# Build TypeScript and Tailwind CSS
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy production dependencies
COPY --from=dependencies /app/node_modules ./node_modules

# Copy built application files
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Expose port
EXPOSE 4000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
