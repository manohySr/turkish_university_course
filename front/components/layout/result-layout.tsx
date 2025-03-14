import CourseCard from "../course-card";

export function ResultLayout() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-medium">
        Found {8} courses matching your search
      </h3>

      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CourseCard
          title="Machine Learning"
          university="Alanya University"
          description="Teaches you the technology and concepts behind predictive text, virtual assistants, and artificial intelligence. You can develop foundational skills to advance to building neural networks and creating more complex functions through Python and R."
          buttonText="Outcome"
        />
        <CourseCard
          title="Machine Learning"
          university="Alanya University"
          description="Teaches you the technology and concepts behind predictive text, virtual assistants, and artificial intelligence. You can develop foundational skills to advance to building neural networks and creating more complex functions through Python and R."
          buttonText="Outcome"
        />
        <CourseCard
          title="Machine Learning"
          university="Alanya University"
          description="Teaches you the technology and concepts behind predictive text, virtual assistants, and artificial intelligence. You can develop foundational skills to advance to building neural networks and creating more complex functions through Python and R."
          buttonText="Outcome"
        />{" "}
        <CourseCard
          title="Machine Learning"
          university="Alanya University"
          description="Teaches you the technology and concepts behind predictive text, virtual assistants, and artificial intelligence. You can develop foundational skills to advance to building neural networks and creating more complex functions through Python and R."
          buttonText="Outcome"
        />
        <CourseCard
          title="Machine Learning"
          university="Alanya University"
          description="Teaches you the technology and concepts behind predictive text, virtual assistants, and artificial intelligence. You can develop foundational skills to advance to building neural networks and creating more complex functions through Python and R."
          buttonText="Outcome"
        />
      </div>
    </div>
  );
}
