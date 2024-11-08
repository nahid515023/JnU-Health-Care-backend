# JnU Counseling Center Android App

## Project Overview

The **JnU Counseling Center App** is an innovative mobile solution aimed at enhancing mental health support for students at Jagannath University. This app digitizes processes such as form submissions, appointment scheduling, and session monitoring, making counseling services more efficient and accessible for students and administrators alike.

## Problem Statement

Students currently face several challenges in accessing mental health services:

- **Manual Form Collection**: Collecting physical forms is inconvenient and time-consuming.
- **Inefficient Processes**: Manual workflows lead to delays and inefficiencies.
- **No Option for Cancellations**: Students cannot cancel counseling requests once submitted.
- **Limited Session Records**: Students lack a centralized way to track their counseling history.

## Solution - JnU Counseling Center App

Our app addresses these issues by providing:

- **Digital Form Submission**: Streamlined electronic form completion and submission.
- **Appointment Cancellations**: Simple and user-friendly cancellation options for appointments.
- **Session History Tracking**: Comprehensive session records for students to track past counseling engagements.
- **Session Monitoring for Admins**: SuperAdmins can view, monitor, and manage active and past counseling sessions, including details such as date, time, counselor, and student information.

## Tools and Technologies

### Frontend (Doctor Appointment App)

- **React Native**: For cross-platform mobile app development.
- **Expo**: Facilitates quick development and testing.
- **Axios**: HTTP client for making API requests.

### Backend (Express API Server)

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Railway**: Platform for hosting the backend services.

### Additional Tools

- **VS Code**: Code editor for development.
- **Postman**: Tool for testing and documenting API endpoints.
- **MongoDB Atlas**: Cloud-hosted database service for MongoDB.

## Software Development Model

We adopted the **Agile development model** to ensure flexibility and continuous improvement:

- **Adaptability**: Agile sprints allow us to respond to feedback and adapt to new requirements.
- **User-Centric**: Regular delivery of new features ensures timely feedback and iterative refinement.
- **Collaboration**: Development was enhanced by close collaboration between developers, university admins, and students.

## Diagrams

### Use Case Diagram
![Use Case Diagram](https://github.com/user-attachments/assets/13b20474-3037-4588-809e-62e10dd5d56e)

### User Activity Diagram (Student)
![Student Activity Diagram](https://github.com/user-attachments/assets/1a8082cb-6aec-4510-a70d-62143c4a8b39)

### User Activity Diagram (Psychiatrists/Admin)
![Admin Activity Diagram](https://github.com/user-attachments/assets/244c66c1-b6c8-4aec-8c22-32777d9c7dc8)

### Data Flow Diagram
![Data Flow Diagram](https://github.com/user-attachments/assets/2c64f74a-c359-429e-a23b-8e781f8dc284)

### ER Diagram
![ER Diagram](https://github.com/user-attachments/assets/edd99ecc-8d92-4af6-9df8-c3b8b72b18eb)

## Business Model

The app is funded and maintained by Jagannath University:

- **Free for Students**: The app is provided at no cost to students, funded by the university.
- **Sustainability**: Continuous funding from the university ensures long-term support, development, and enhancement of the app, reflecting the institution's commitment to student mental health.

## Installation Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Expo CLI** for mobile app development

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nahid515023/JnU-Health-Care.git
   cd JnU-Health-Care
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or, if using Yarn:
   ```bash
   yarn install
   ```

3. **Start the Expo development server**:
   ```bash
   expo start
   ```

4. **Run the app**:
   Use the **Expo Go** app on your mobile device (available for Android and iOS) to scan the QR code displayed in the terminal or browser and run the app.

### Backend Setup

1. **Clone the backend repository**:
   ```bash
   git clone https://github.com/nahid515023/JnU-Health-Care-backend.git
   cd JnU-Health-Care-backend
   ```

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the backend folder with the following:

   ```env
   PORT=3000
   DATABASE_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the backend server**:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## Conclusion

The **JnU Counseling Center App** modernizes and simplifies access to mental health services for students, providing an efficient, user-friendly, and comprehensive platform to support their mental well-being.

Feel free to contribute to the project by submitting pull requests or reporting any issues.
