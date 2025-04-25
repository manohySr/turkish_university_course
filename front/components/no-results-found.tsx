import { Search } from "lucide-react";

interface NoResultsFoundProps {
  query: string;
}

export function NoResultsFound({ query }: NoResultsFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
      <p className="mt-2 text-sm text-gray-500">
        We couldn't find any courses matching "{query}"
      </p>
      <p className="mt-1 text-sm text-gray-500">
        Try adjusting your search or check your spelling
      </p>
    </div>
  );
} 