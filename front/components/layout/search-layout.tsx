import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Tag } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "@/components/ui/badge";

// TODO: make it related to the backend

const popularSearch = [
  "Computer Science",
  "Data Science",
  "Artificial Intelligence",
  "Machine Learning",
  "Cybersecurity", 
  
];

interface SearchCourseLayoutProps {
  query: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}

export function SearchCourseLayout({ query, onSearchChange, onSearchClick }: SearchCourseLayoutProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-md shadow-sm p-4 sm:p-6">
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 sm:mb-6">Find a Course</h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Enter your course name, e.g:computer programming..."
                className="pl-9 w-full"
                value={query}
                onChange={onSearchChange}
              />
            </div>
            <Button 
              type="button" 
              onClick={onSearchClick}
              className="w-full sm:w-auto"
            >
              <span>Search</span>
              <Sparkles className="h-4 w-4 sm:ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Popular Searches</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {popularSearch.map((term, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="cursor-pointer hover:bg-secondary/80"
            >
              {term}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
