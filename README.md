# 🎓 Student Management System

A modern Student Management System built using **Java Spring Boot**, **Spring Security**, **Thymeleaf**, and **MySQL**. The application provides secure authentication and a dashboard for managing student records.

## 🚀 Features

### Authentication

* Secure Login Page
* Spring Security Integration
* Session-Based Authentication
* Admin Dashboard
* Logout Functionality

### Student Management

* Add Student
* View Students
* Update Student Details
* Delete Student Records
* Search Students

### Dashboard

* Admin Dashboard
* Student Statistics
* Responsive UI
* Modern Glassmorphism Design

## 🛠️ Tech Stack

### Backend

* Java 17
* Spring Boot 3
* Spring Security
* Spring Data JPA
* Hibernate

### Frontend

* Thymeleaf
* HTML5
* CSS3
* Bootstrap 5
* JavaScript

### Database

* MySQL

### Build Tool

* Maven

## 📂 Project Structure

```text
src/main/java/com/example/studentmanagement
│
├── config
│   └── SecurityConfig.java
│
├── controller
│   ├── AuthController.java
│   └── StudentController.java
│
├── entity
│   ├── Student.java
│   └── User.java
│
├── repository
│   ├── StudentRepository.java
│   └── UserRepository.java
│
├── service
│   └── StudentService.java
│
└── StudentManagementSystemApplication.java
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/student-management-system.git
cd student-management-system
```

### Configure Database

Create MySQL database:

```sql
CREATE DATABASE studentdb;
```

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Build Project

```bash
mvn clean install
```

### Run Application

```bash
mvn spring-boot:run
```

Application URL:

```text
http://localhost:8080
```

## 👤 Default Admin User

```text
Username: admin
Password: admin123
```

## 📸 Screenshots

### Login Page
<img width="1919" height="990" alt="image" src="https://github.com/user-attachments/assets/3ff8861a-4d42-4b23-94fe-f50881c86416" />


* Modern Glassmorphism UI
* Responsive Design

### Dashboard


* Admin Dashboard
* Student Management Panel
* Statistics Cards

## 🔮 Future Enhancements

* Student Login Portal
* Course Management Module
* Attendance Management
* Result Management
* Forgot Password Feature
* Email Notifications
* Role-Based Authorization
* Docker Deployment
* AWS / Plesk Deployment

## 👨‍💻 Author

Developed by Raj R.B.

GitHub: https://github.com/BiswajitRB
LinkedIn: https://www.linkedin.com/in/biswajit-r-b-a5b035304/

## 📄 License

This project is developed for learning, academic, and portfolio purposes.
