package com.example.backjava.model;

import java.util.List;

import lombok.Data;

@Data
public class Course {
  private String name;
  private String department;
  private String university;
  private String description;
  private List<String> outcome;
  private List<String> jobOpportunities;
}
