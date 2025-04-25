"use client";

import { useState } from "react";
import { ResultLayout } from "@/components/layout/result-layout";
import { SearchCourseLayout } from "@/components/layout/search-layout";

// TODO: create state management system so we can optimize
export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(query);
  };

  return (
    <div className="flex-1 flex flex-col">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Turkish University Course Finder
              </h1>
              <p className="text-muted-foreground mt-1">
                Search for courses across Turkish universities and find where
                they're offered
              </p>
            </div>
            <nav className="hidden md:flex items-center gap-4 text-sm">
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
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchCourseLayout 
            query={query} 
            onSearchChange={handleSearchInput} 
            onSearchClick={handleSearchClick}
          />
          <ResultLayout query={searchQuery} />
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} ManohySr | All data is for
            demonstration purposes for now
          </p>
        </div>
      </footer>
    </div>
  );
}
