import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

export function SearchCourseLayout() {
  return (
    <div className="flex items-center w-full justify-center">
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
  );
}
