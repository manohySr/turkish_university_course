"use client";

import { useState } from "react";
import { ResultLayout } from "@/components/layout/result-layout";
import { SearchCourseLayout } from "@/components/layout/search-layout";

// TODO: create state management system so we can optimize
export default function Home() {
  const [query, setQuery] = useState<string>("");

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Turkish University Course Finder
              </h1>
              <p className="text-muted-foreground mt-1">
                Search for courses across Turkish universities and find where
                they're offered
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Universities
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <SearchCourseLayout query={query} onSearchChange={handleSearchInput} />
        <ResultLayout query={query} />
      </main>
      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ManohySr | All data is for
            demonstration purposes for now
          </p>
        </div>
      </footer>
    </div>
  );
}
