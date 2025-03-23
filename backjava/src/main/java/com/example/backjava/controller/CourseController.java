package com.example.backjava.controller;

import com.example.backjava.exception.NotFoundException;
import com.example.backjava.model.Course;
import com.example.backjava.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping()
    public ResponseEntity<List<Course>> getCourses() {
        try {
            List<Course> courses = courseService.getCourses();

            if(courses.isEmpty() || courses == null) {
                throw new NotFoundException("Not found");
            }

            return new ResponseEntity<>(courses, HttpStatus.OK);
        } catch (RuntimeException e) {  // Catch RuntimeException instead
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
