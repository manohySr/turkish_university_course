package com.example.backjava.controller;

import com.example.backjava.exception.NotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/course")
public class CourseController {

  @GetMapping
  public String getAllCourses() {
    throw new NotFoundException("There is no implementation for now");
  }
}
