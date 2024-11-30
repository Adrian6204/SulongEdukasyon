FROM openjdk:23-jdk-slim
WORKDIR /app
COPY backend/pom.xml .
RUN apt-get update && apt-get install -y maven

COPY backend/src /app/src
RUN mvn clean package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/SulongEdukasyon.jar"]