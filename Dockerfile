FROM alpine:latest

# Install necessary packages
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip \
    dumb-init

ARG PB_VERSION=0.28.3

# Download and install PocketBase
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip \
    && unzip pocketbase_${PB_VERSION}_linux_amd64.zip \
    && chmod +x pocketbase

# Create app directory
WORKDIR /app

# Copy your PocketBase files (migrations, hooks, etc.)
COPY . .

# Create data directory for persistent storage
RUN mkdir -p /app/pb_data

# Expose port (Render will provide PORT environment variable)
EXPOSE 8080

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start PocketBase with proper configuration for Render
CMD ["sh", "-c", "./pocketbase serve --http=0.0.0.0:${PORT:-8080} --dir=/app/pb_data"]