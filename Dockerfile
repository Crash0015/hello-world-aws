# Use a lightweight base image, Nginx, to serve static files
FROM nginx:alpine

# Copy your local project files (HTML, CSS, JS)
# into the default web directory Nginx uses
COPY . /usr/share/nginx/html

# Tell Docker that the container will listen on port 80
EXPOSE 80

# The command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]