# 🚀 Serverless Real-Time Chat Application (AWS)

A fully serverless real-time chat application built using AWS services.

## 🏗 Architecture

Frontend (S3 + CloudFront)
⬇
API Gateway (WebSocket)
⬇
AWS Lambda
⬇
DynamoDB

---

## 🛠 Services Used

* Amazon S3 – Static frontend hosting
* Amazon CloudFront – CDN
* Amazon API Gateway (WebSocket API)
* AWS Lambda – Backend logic
* Amazon DynamoDB – Store connections & messages
* IAM – Permissions management

---

## 🗄 DynamoDB Tables

### 1️⃣ Connections

* Partition Key: `connectionId`
* Stores active WebSocket connections

### 2️⃣ Messages

* Partition Key: `roomId`
* Sort Key: `timestamp`
* Stores chat messages per room

---

## ⚡ Lambda Functions

### onConnect

* Stores new connection in DynamoDB

### onDisconnect

* Removes connection from DynamoDB

### sendMessage

* Broadcasts message to all users in the same room

---

## 🌐 Deployment Steps

1. Create DynamoDB tables
2. Create Lambda functions
3. Attach IAM permissions
4. Create WebSocket API
5. Deploy Stage
6. Host frontend in S3

---

## 🎯 Features

* Multi-room chat support
* Real-time WebSocket communication
* Fully serverless
* Scalable & cost-effective

---

## 📸 Architecture Diagram

(![Architecture](architecture.png))

---

## 👨‍💻 Author

Mahi
Server Administrator
