import { useEffect, useState } from "react";
import CourseCard from "../course-card";

// TODO: creating dotenv
const uri = "http://localhost:8080/api/courses";

// TODO: Query type
export function ResultLayout({ query }) {
  const [courses, setCourses] = useState([]);

  async function fetchCourses() {
    const res = await fetch(uri);
    const data = await res.json();
    console.log(data);
    setCourses(data);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h3 className="text-lg font-medium">
        Found {8} courses matching your search
      </h3>

      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.length > 0 ? (
          courses.map((course, key) => <CourseCard key={key} course={course} />)
        ) : (
          <p className="text-gray-500 col-span-full">
            No courses found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
}
