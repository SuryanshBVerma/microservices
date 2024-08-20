# Social Media Platform Microservices

## Overview
This project is a scalable social media platform built using a microservices architecture. Each service is responsible for specific functionalities, enabling independent development, scaling, and deployment. The platform supports full CRUD (Create, Read, Update, Delete) operations across all services.

## Architecture
### **Microservices**
- **API Gateway:** Routes requests to the appropriate microservice.
- **User Service:** Manages user registration, authentication, and profile management.
- **Post Service:** Handles creation, retrieval, updating, and deletion of posts.
- **Comment Service:** Manages comments on posts.
- **Like Service:** Handles likes and unlikes on posts and comments.
- **Notification Service:** Sends notifications for activities like likes, comments, and follows.
- **Follow Service:** Manages user follow and unfollow functionality.
- **Media Service:** Handles media file uploads and retrieval.

### **Technology Stack**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Message Queue:** RabbitMQ/Kafka
- **Caching:** Redis
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Testing:** Postman

### **Architecture Diagram**
![Architecture Diagram](path/to/architecture-diagram.png)

## Prerequisites
- **Node.js** and **npm**
- **Docker** and **Docker Compose**
- **MongoDB** for local development

## Setup & Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/your-repo/social-media-platform.git
cd social-media-platform
