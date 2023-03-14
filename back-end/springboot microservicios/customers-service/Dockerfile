FROM openjdk

COPY target/springboot-0.0.1-SNAPSHOT.war service.war

ENTRYPOINT [ "java", "-jar", "/service.war" ]