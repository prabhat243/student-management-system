# Step 1: Use an official OpenJDK image as base
FROM eclipse-temurin:17-jdk-alpine



# Step 2: Set working directory inside container
WORKDIR /app



# Step 3: Copy the JAR file from your target folder to /app
COPY target/studentmanagement-0.0.1-SNAPSHOT.jar app.jar


# Step 4: Expose the port your Spring Boot app runs on
EXPOSE 8080

# Step 5: Command to run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]