FROM alpine:latest

# Install necessary packages
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip

# Download and install PocketBase
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.28.3/pocketbase_0.28.3_linux_amd64.zip \
    && unzip pocketbase_0.28.3_linux_amd64.zip \
    && chmod +x pocketbase

# Create app directory
WORKDIR /app

# Copy your PocketBase files
COPY . .

# Expose port
EXPOSE 8080

# Start PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]