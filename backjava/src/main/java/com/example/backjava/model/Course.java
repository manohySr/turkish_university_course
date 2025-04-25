package com.example.backjava.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true) // This ignores unrecognized fields in JSON
public class Course {
    private Long id;
    private String name;
    private String department;
    private String university;
    private String description;
    private List<String> outcome;
    private List<String> jobOpportunities;

    // No-argument constructor (important for Jackson deserialization)
    public Course() {
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getOutcome() {
        return outcome;
    }

    public void setOutcome(List<String> outcome) {
        this.outcome = outcome;
    }

    public List<String> getJobOpportunities() {
        return jobOpportunities;
    }

    public void setJobOpportunities(List<String> jobOpportunities) {
        this.jobOpportunities = jobOpportunities;
    }

    // toString() for debugging
    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                ", university='" + university + '\'' +
                ", description='" + description + '\'' +
                ", outcome=" + outcome +
                ", jobOpportunities=" + jobOpportunities +
                '}';
    }
}