package com.example.backjava.service;

import com.example.backjava.model.Course;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {
    private static final String FILE_PATH = "mock.json"; // Path inside resources/

    public List<Course> getCourses(String search) {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // Load the file from resources/
            InputStream inputStream = new ClassPathResource(FILE_PATH).getInputStream();

            // Read JSON file from resources/
            List<Course> courses = objectMapper.readValue(inputStream, new TypeReference<List<Course>>() {});

            if (courses == null || courses.isEmpty()) {
                System.out.println("No courses found in the JSON file.");
                throw new IllegalStateException("No courses found in the JSON file.");
            }

            // If search parameter is provided, filter the courses
            if (StringUtils.hasText(search)) {
                String searchLower = search.toLowerCase();
                courses = courses.stream()
                    .filter(course -> 
                        course.getName().toLowerCase().contains(searchLower) ||
                        course.getDepartment().toLowerCase().contains(searchLower) ||
                        course.getUniversity().toLowerCase().contains(searchLower) ||
                        course.getDescription().toLowerCase().contains(searchLower) ||
                        course.getOutcome().stream().anyMatch(outcome -> outcome.toLowerCase().contains(searchLower)) ||
                        course.getJobOpportunities().stream().anyMatch(job -> job.toLowerCase().contains(searchLower))
                    )
                    .collect(Collectors.toList());
            }

            return courses;

        } catch (IOException e) {
            System.out.println(e);
            throw new RuntimeException("Error reading JSON file", e);
        }
    }
}
