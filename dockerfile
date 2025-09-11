# Use an older Node base to increase the chance of distro-level & runtime issues being flagged
FROM node:10

# Create app dir
WORKDIR /usr/src/app

# Copy package files first to leverage Docker layer caching
COPY package.json ./

# Install dependencies (will produce node_modules with the old versions)
RUN npm install --no-audit --no-fund

# Copy app source
COPY app.js ./

# expose and run
EXPOSE 3000
CMD ["npm", "start"]
