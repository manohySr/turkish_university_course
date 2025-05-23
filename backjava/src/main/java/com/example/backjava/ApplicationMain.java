package com.example.backjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ApplicationMain {
  public static void main(String[] args) {
    System.setProperty("spring.devtools.restart.enabled", "true");
    SpringApplication.run(ApplicationMain.class, args);
  }
}
