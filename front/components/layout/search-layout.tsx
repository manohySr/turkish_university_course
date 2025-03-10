import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Tag } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "@/components/ui/badge";

const popularSearch = [
  "Computer Engineering",
  "Medicine",
  "Business Administration",
  "Law",
  "Mechanical Engineering",
  "Psychology",
  "Economics",
  "Architecture",
  "Electrical Engineering",
  "International Relations",
];

export function SearchCourseLayout() {
  return (
    <div className="p-6">
      <Card className="bg-white rounded-md shadow-sm p-6">
        <div className="w-3/4">
          <h2 className="text-xl font-semibold pl-8">Find a Course</h2>
          <div className="flex items-center w-full">
            <div className="relative p-5 w-3/4">
              <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Enter your course name, e.g:computer programming..."
                className="pl-10"
              />
            </div>
            <Button type="submit">
              Search <Sparkles className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <div className="bg-white rounded-lg shadow-md p-6">
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
