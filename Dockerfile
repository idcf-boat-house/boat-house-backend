FROM maven:3.5.2-jdk-8-alpine AS MAVEN_BUILD
MAINTAINER leansoftx
COPY src/account-service/api/pom.xml /build1/
COPY src/account-service/api/src /build2/src/
WORKDIR /build1/
RUN mvn package && mvn cobertura:cobertura

COPY src/product-service/api/pom.xml /build2/
COPY src/product-service/api/src /build1/src/
WORKDIR /build2/
RUN mvn package && mvn cobertura:cobertura

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=MAVEN_BUILD /build1/target/account-service-0.0.1-SNAPSHOT.jar /app1/
COPY --from=MAVEN_BUILD /build2/target/product-service-0.0.1-SNAPSHOT.jar /app2/
RUN java -jar account-service-0.0.1-SNAPSHOT.jar & java -jar product-service-0.0.1-SNAPSHOT.jar


