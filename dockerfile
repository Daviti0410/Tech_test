# Use Node.js as base image to build the React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Use a lightweight Node.js server to serve the built files
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build /app

# Install a lightweight server like serve
RUN npm install -g serve

# Serve the built React app on port 3000
EXPOSE 3000
CMD ["serve", "-s", "/app", "-l", "3000"]
