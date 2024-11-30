FROM openjdk:23-jdk-slim AS build
WORKDIR /app
COPY backend/pom.xml .
RUN mvn clean package -DskipTests

FROM openjdk:23-jdk-slim
WORKDIR /app
COPY --from=build /app/target/SulongEdukasyon.jar /app/SulongEdukasyon.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/SulongEdukasyon.jar"]
