FROM maven:3.9.9-openjdk-17 AS build
WORKDIR /app
COPY backend/pom.xml .
COPY backend/src /app/src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/SulongEdukasyon.jar /app/SulongEdukasyon.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/SulongEdukasyon.jar"]
