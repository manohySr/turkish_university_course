import { useEffect, useState } from "react";
import CourseCard from "../course-card";
import { NoResultsFound } from "../no-results-found";

// TODO: creating dotenv
// TODO: make it related to the backend
const uri = "http://localhost:8080/api/courses";

interface Course {
  id: string;
  name: string;
  university: string;
  // Add other course properties as needed
}

export function ResultLayout({ query }: { query: string }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchCourses() {
    if (!query.trim()) {
      setCourses([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`${uri}?search=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Failed to fetch courses');
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      setError('Failed to fetch courses. Please try again later.');
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, [query]);

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-center text-red-500">
          {error}
        </div>
      </div>
    );
  }

  if (!query.trim()) {
    return null;
  }

  return (
    <div className="p-6">
      <h3 className="text-lg font-medium mb-5">
        Found {courses.length} courses matching your search
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.length > 0 ? (
          courses.map((course) => <CourseCard key={course.id} course={course} />)
        ) : (
          <NoResultsFound query={query} />
        )}
      </div>
    </div>
  );
}
