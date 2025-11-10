# Hello World on AWS (EC2 with Full CI/CD)

This is a "Hello World" project deployed on **AWS EC2** as part of a university assignment on Cloud Providers and Service Models.

The primary goal of this repository is to demonstrate a fully automated **CI/CD (Continuous Integration / Continuous Deployment)** pipeline. Any change pushed to the `main` branch will automatically trigger a GitHub Action to build a new Docker image, push it to Docker Hub, and redeploy the application on the EC2 server.

## 👥 Team Members

- Cristian Pilapanta
- Dylan Paez
- Rommel Pachacama
- Andres Caluguillin

---

## 🚀 Live Demo

The application is running live and is publicly accessible at our static IP address.

**Public URL:** **[http://54.144.216.159](http://54.144.216.159)**

## Technology Stack

- **Cloud Provider:** AWS (Amazon Web Services)
- **Service:** EC2 (Elastic Compute Cloud) with an Elastic IP
- **Containerization:** Docker
- **Web Server:** Nginx
- **CI/CD:** GitHub Actions
- **Image Registry:** Docker Hub

---

## Automated CI/CD Pipeline

This project is 100% automated. The `.github/workflows/deploy.yml` file defines the entire process, which runs on every push to `main`:

### Job 1: `build-and-push`

1.  The workflow checks out the repository's code.
2.  It logs into Docker Hub using secrets.
3.  It builds the `Dockerfile` into a new image.
4.  It pushes the new image to our Docker Hub registry with the `latest` tag.

### Job 2: `deploy-to-ec2`

1.  This job waits for `build-and-push` to succeed.
2.  It securely connects to our AWS EC2 instance using SSH (via stored secrets).
3.  Once connected, it runs a script _inside_ the server to:
    a. Pull the new `latest` image from Docker Hub.
    b. Stop the container that is currently running.
    c. Remove the old container.
    d. Start a new container from the new image, mapping port 80.

This ensures the server is always running the most recent version of the code with no manual intervention.

---

## Run Locally with Docker

You can run this project on your own machine using our published Docker Hub image.

1.  **Prerequisite:** You must have [Docker](https://www.docker.com/products/docker-desktop/) installed in your PC.

2.  **Pull the image** from Docker Hub:

    ```bash
    docker pull cristianp970/hello-world-aws:latest
    ```

3.  **Run the container:**
    _(This command maps your local port 8080 to the container's port 80)_

    ```bash
    docker run -d -p 8080:80 --name hello-aws-local cristianp970/hello-world-aws:latest
    ```

4.  **View the project:**
    Open your browser and go to **[http://localhost:8080](http://localhost:8080)**.

---

## How to Replicate this Setup

To fork this repository and create your own automated pipeline, you would need to:

1.  **Fork this repository.**
2.  **Create an AWS EC2 Instance:**
    - Launch a `t2.micro` (Free Tier) instance with an Amazon Linux 2 AMI.
    - Create and download a new `.pem` key pair.
    - **Install Docker** on the instance manually (using `sudo yum install docker -y`).
3.  **Configure AWS Security Group:**
    - Open **Port 22 (SSH)** to your IP address (for testing) and later to GitHub Actions.
    - Open **Port 80 (HTTP)** to `0.0.0.0/0` (Anywhere) so the public can see the website.
4.  **Assign an Elastic IP:**
    - Allocate a new Elastic IP address in the EC2 console.
    - Associate this new IP with your instance.
5.  **Create Repository Secrets:**
    - In your forked repository's settings (`Settings > Secrets and variables > Actions`), add the following 5 secrets:
    - `DOCKERHUB_USERNAME`: Your Docker Hub username.
    - `DOCKERHUB_TOKEN`: A Docker Hub Access Token.
    - `EC2_HOST_IP`: The static Elastic IP from step 4 (e.g., `54.144.216.159`).
    - `EC2_USERNAME`: The username for your instance (e.g., `ec2-user` for Amazon Linux).
    - `EC2_PRIVATE_KEY`: The full text content of the `.pem` key file you downloaded in step 2.
