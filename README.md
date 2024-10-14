# JnU Counseling Center Android App

## Project Overview

The **JnU Counseling Center App** is designed to streamline access to mental health services for university students. It digitizes the process of form submission, appointment tracking, and session monitoring to improve the efficiency and convenience of counseling services at Jagannath University.

## Problem Statement

Currently, students face the following challenges:

- **Manual Form Collection**: Students must collect physical counseling forms, which is inconvenient and time-consuming.
- **Time-Consuming Process**: The manual nature of the process is inefficient.
- **No Cancellation Option**: Students cannot cancel their counseling requests once submitted.
- **Lack of Session History**: Students have no centralized system to track their counseling sessions.

## Solution - JnU Counseling Center App

Our solution addresses these issues by providing:

- **Digital Form Submission**: Students can complete and submit counseling forms electronically, eliminating manual processes.
- **Cancellation Option**: Students can easily cancel appointments if needed.
- **Session History Tracking**: Students can view records of their previous counseling sessions.
- **Session Monitoring**: The SuperAdmin can view active and past counseling sessions, including session details like date, time, counselor, and student information.

## Tools and Technologies

### Frontend (Doctor Appointment App)

- **React Native**
- **Expo**
- **Axios**

### Backend (Express API Server)

- **Node.js**
- **Express.js**
- **MongoDB**
- **Railway (Hosting)**

### Tools Used

- **VS Code**
- **Postman**
- **MongoDB Atlas**

## Software Development Model

We followed the **Agile development model** to ensure flexibility and adaptability:

- **Adaptability to Change**: Agile sprints allow us to adjust based on student needs and university policies.
- **User-Focused**: We deliver working features quickly to gather feedback and refine the app continuously.
- **Collaboration**: Teamwork between developers, admins, and students enhances the app’s functionality.

## Diagrams

- **Use Case Diagram**
  
  <img width="3338" alt="Untitled" src="https://github.com/user-attachments/assets/13b20474-3037-4588-809e-62e10dd5d56e">
  
- **User Activity Diagram (Student)**
  
  ![stdnew](https://github.com/user-attachments/assets/1a8082cb-6aec-4510-a70d-62143c4a8b39)
  
- **User Activity Diagram (Psychiatrists/Admin)**
  
  ![admin drawio](https://github.com/user-attachments/assets/244c66c1-b6c8-4aec-8c22-32777d9c7dc8)
  
- **Data Flow Diagram**
  
  ![dataFlow drawio](https://github.com/user-attachments/assets/2c64f74a-c359-429e-a23b-8e781f8dc284)
  
- **ER Diagram**
  
  ![ER (1)](https://github.com/user-attachments/assets/edd99ecc-8d92-4af6-9df8-c3b8b72b18eb)


## Business Model

The app is university-funded and operated:

- **Free for Students**: The university budgets for the app’s development and ongoing support, ensuring no cost for students.
- **Sustainability**: Continued funding from the university ensures the app's ongoing development and support, aligned with its commitment to mental health resources.

## Installation Instructions

### Prerequisites

To run this project locally, you need to have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn** (package manager)
- **Expo CLI** (for React Native development)

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/nahid515023/JnU-Health-Care.git
   cd JnU-Health-Care

2. Install the dependencies:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

3. Start the Expo development server:

   ```bash
   expo start
   ```

4. Use the **Expo Go** app (available on both Android and iOS) to scan the QR code from your terminal or web browser to run the app on your mobile device.

#### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/nahid515023/JnU-Health-Care-backend.git
   cd JnU-Health-Care-backend

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the backend folder.

4. Start the backend server:

   ```bash
   npm start
   ```

5. The backend server will be hosted at

```bash
   `http://localhost:3000`.
```

   
