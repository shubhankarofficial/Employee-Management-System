# Employee Management System 🚀

The **Employee Management System** is a full-stack web application built using **Spring Boot** for the backend, **React.js** for the frontend, and **MySQL** for database operations.  
It provides RESTful APIs that the frontend consumes, performing CRUD operations efficiently with **JPA (Java Persistence API)**.  
The UI is styled using **Bootstrap classes** to ensure a clean and responsive design.

---

## **📌 Features**
- ✅ Employee CRUD (Create, Read, Update, Delete) operations.
- ✅ RESTful APIs built with **Spring Boot**.
- ✅ SQL database integration using **JPA (Hibernate)**.
- ✅ Frontend built with **React.js**.
- ✅ UI styling with **Bootstrap** for responsiveness.
- ✅ API communication handled with **Axios**.

---

## **🛠 Prerequisites**
Before setting up the project, make sure you have the following installed:

### **🔹 Backend Requirements (Spring Boot)**
- [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [MySQL](https://dev.mysql.com/downloads/installer/) (or any SQL database)
- Any **IDE**:
    - **IntelliJ IDEA** (Recommended)    

### **🔹 Frontend Requirements (React.js)**
- [Node.js & npm](https://nodejs.org/en/download/)
- Any **IDE**:
    - **VS Code** (Recommended)

---

## **🚀 How to Clone and Run This Project**
### **Step 1: Clone the Repository**
```bash
git clone https://github.com/shubhankarofficial/Employee-Management-System.git
cd Employee-Management-System
```
---
### **Step 2: Opening Backend (Spring Boot)**
Since the backend is built with **Spring Boot**, it is recommended to open it in **IntelliJ IDEA**.

#### **📌 Opening the Backend in an IDE**
##### **✅ IntelliJ IDEA (Recommended)**
1. Open **IntelliJ IDEA**.
2. Click **File → Open** and select `Employee-Management-System/backend/`.
3. Wait for **Maven** to import dependencies automatically.
4. If dependencies don’t load, manually reload them by running:
   ```bash
   mvn clean install
      ```
---   
### **Step 3: Configuring the SQL Database (MySQL)**

Before running the backend, you need to set up the **MySQL database**.

#### **📌 Creating the Database in MySQL**
1. Open your **MySQL Command Line** or **MySQL Workbench**.
2. Run the following command to create a database:
   ```sql
   CREATE DATABASE name_of_db;
   ```
#### **📌 Setting Up Database Details on Backend**
To connect the Spring Boot backend to the **MySQL database**, update the configuration in `application.properties`.

1. Open the **backend configuration file**: backend/src/main/resources/application.properties
2. Add or update the following properties:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/name_of_db
spring.datasource.username=yournameindb
spring.datasource.password=yourpassword

# Hibernate settings (for automatic table creation)
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
---
### **Step 4: Running the Backend (Spring Boot)**

Once the database is configured, you can now **run the backend server**.

#### **📌 Running the Backend in IntelliJ IDEA**
1. Open **IntelliJ IDEA**.
2. Navigate to: backend/src/main/java/net/project/ems/
3. Open the `EmsBackendApplication.java` file.
4. Click the **Run ▶️ button** to start the application.
5. Alternatively, you can start the backend using the **terminal**:
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
6. By default, the SpringBoot Application would start now on port *8080*.
---
### **Step 5: Setting Up the Frontend (React.js - Vite)**

Now that the backend is running, let's set up the **React.js frontend**, which was created using **Vite**.

#### **📌 Opening the Frontend in VS Code**
1. Open **VS Code**.
2. Click **File → Open Folder** and select: Employee-Management-System/frontend/
3. Open the **terminal** in VS Code (`Ctrl + ~` or `Cmd + ~` on Mac)
4. Installing Dependencies:
Before running the frontend, install all required dependencies:

```bash
cd frontend
npm install
```
5. Run the dev script of front-end using the following commands in terminal:
```bash
npm run dev
```
6. The front-end should now run and should be available on port *3000* or *5173* by default.

---
## **🚀 Using the Application**
Now that both the **backend and frontend are running**, you can start using the **Employee Management System**.

### **📌 Ensure All Services Are Running**
Before interacting with the application, ensure:
- ✅ **Backend is running** at: `http://localhost:8080`
- ✅ **Frontend is running** at: `http://localhost:3000` (or your configured Vite port)
- ✅ **Database (MySQL) is running** and connected to the backend

Once everything is running, you can:
- **Use the frontend UI** in the browser to manage employees.
- **Interact with the backend API** directly using Postman or cURL.
- **Modify backend logic** to suit your needs.
- **Use the REST API in other projects** to fetch or manipulate employee data.

---

## **📌 Interacting with the API**
Apart from using the web UI, you can interact with the backend REST APIs using:
- **Postman** (recommended)
- **cURL** in the terminal
- **Custom JavaScript, Python, or any backend code** that calls REST APIs
---
---

## **🔗 Available API Endpoints**
Below is a list of **some** available REST APIs:

### **📌 Employee APIs**
| Method | Endpoint                     | Description                  | Request Body |
|--------|------------------------------|------------------------------|--------------|
| GET    | `/api/employees/allEmp`      | Get all employees            | ❌ No Body |
| GET    | `/api/employees/{id}`        | Get an employee by ID        | ❌ No Body |
| POST   | `/api/employees/createEmp`   | Create a new employee        | ✅ JSON Payload |
| PUT    | `/api/employees/update/{id}` | Update an employee by ID     | ✅ JSON Payload |
| DELETE | `/api/employees/{id}`        | Delete an employee by ID     | ❌ No Body |

#### **📌 Sample JSON Request Body for Creating an Employee**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "departmentId": "1"
}
```
---
## **📜 License**
This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it as per the license terms.  

---

## **👨‍💻 Author**
**Shubhankar Garg**  
📧 Email: sbkgarg@ucdavis.edu  
🔗 GitHub: [shubhankarofficial](https://github.com/shubhankarofficial)

---

### **🚀 Thank You for Using Employee Management System!**
If you found this project useful, give it a ⭐ on GitHub! 😊








   

