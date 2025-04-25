package com.example.backjava.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class CourseScrapperJob {
    private static final Logger logger = LoggerFactory.getLogger(CourseScrapperJob.class);
    private static final String URL = "https://obs.isparta.edu.tr/Public/EctsShowProgramDetails.aspx?BolumNo=2721&BirimNo=27";
    private static final Path FILE_PATH = Paths.get("/home/manohysr/Documents/seminar_project/backjava/src/main/resources/mock.json");

    @Scheduled(fixedRate = 300000) // every 5 min
    public void scrapeCourses() {
        logger.info("Starting course scraping job...");
    
        try {
            // Load existing data
            ObjectMapper mapper = new ObjectMapper();
            List<Map<String, Object>> existingCourses = new ArrayList<>();
    
            if (Files.exists(FILE_PATH)) {
                existingCourses = mapper.readValue(Files.readAllBytes(FILE_PATH), new TypeReference<>() {});
            }
    
            Document doc = Jsoup.connect(URL).timeout(30000).get();
            Elements rows = doc.select("table tr");
    
            for (Element row : rows) {
                Elements cols = row.select("td");
                if (cols.size() < 5 || isRowEmpty(cols) || isDepartmentInfoRow(cols)) continue;
    
                String code = cols.get(0).text().trim();
                String title = cols.get(1).text().trim();
                // String type = extractCourseType(title);
                // String credit = extractCredit(title);
                String ects = cols.get(4).text().trim();
    
                // 👇 Get link to details page
                Element linkElement = cols.get(1).selectFirst("a");
                String courseUrl = null;
                if (linkElement != null) {
                    String href = linkElement.attr("href");
                    courseUrl = "https://obs.isparta.edu.tr/Public/" + href;
                }
    
                String description = "To be determined";
                List<String> outcomes = List.of("To be determined");
    
                if (courseUrl != null) {
                    try {
                        Document detailDoc = Jsoup.connect(courseUrl).timeout(30000).get();
                        
                        // Get course description (Course Aims)
                        Element descriptionEl = detailDoc.selectFirst("#ctl00_ContentPlaceHolder1_lblDersAmaci");
                        if (descriptionEl != null) {
                            description = descriptionEl.text().trim();
                        }
    
                        // Get course outcomes (Course Learning Outcomes)
                        Elements outcomeEls = detailDoc.select("table#ctl00_ContentPlaceHolder1_grdDersCiktilari tr td"); // Adjusted the selector based on your page structure
                        outcomes = outcomeEls.stream()
                            .map(Element::text)
                            .filter(s -> !s.isBlank())
                            .collect(Collectors.toList());
                    } catch (Exception e) {
                        logger.warn("Failed to fetch course details for {}", code, e);
                    }
                }
    
                // Validate and add course if it's new and valid
                if (isValidCourseData(code, title, ects)) {
                    boolean alreadyExists = existingCourses.stream()
                        .anyMatch(c -> code.equals(c.get("code")));
    
                    if (!alreadyExists) {
                        Map<String, Object> newCourse = Map.of(
                            "id", existingCourses.size() + 1,
                            "code", code,
                            "name", title,
                            "department", "Computer Science",
                            "university", "Suleyman Demirel University",
                            "description", description,
                            "outcome", outcomes,
                            "jobOpportunities", List.of("To be determined")
                        );
    
                        existingCourses.add(newCourse);
                    }
                }
            }
    
            // Write back to JSON
            mapper.writerWithDefaultPrettyPrinter().writeValue(FILE_PATH.toFile(), existingCourses);
    
            logger.info("Scraping and update completed.");
    
        } catch (Exception e) {
            logger.error("Error during scraping job", e);
        }
    }
    

    private boolean isRowEmpty(Elements cols) {
        return cols.stream().allMatch(col -> col.text().trim().isEmpty());
    }

    private boolean isDepartmentInfoRow(Elements cols) {
        String firstCol = cols.get(0).text().trim();
        return firstCol.contains("Bölüm Başkanı") || firstCol.contains("AKTS Koordinatörü");
    }

    private boolean isValidCourseData(String code, String title, String ects) {
        return !code.isEmpty() && !title.isEmpty() && !ects.isEmpty();
    }

    private String extractCourseType(String title) {
        // Add your logic here to extract course type from the title if needed
        return "To be determined";
    }

    private String extractCredit(String title) {
        // Add your logic here to extract credit from the title if needed
        return "To be determined";
    }
}
