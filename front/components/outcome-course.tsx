import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Briefcase, ChevronRight, LightbulbIcon, Users } from "lucide-react";

const OutCome = () => {
  return (
    <div className="bg-primary/5 rounded-lg p-4">
      <h3 className="text-md font-medium mb-3 flex items-center">
        <LightbulbIcon className="h-5 w-5 mr-2 text-primary" />
        Learning Outcomes
      </h3>

      <div className="space-y-1 mt-2">
        <div className="flex items-start gap-2">
          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            Design and implement relational database schemas
          </p>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            Write complex SQL queries for data retrieval and manipulation
          </p>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            Understand database normalization principles Implement transaction
            processing with ACID properties
          </p>
        </div>
        <div className="flex items-start gap-2">
          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            Optimize database performance through indexing and query
            optimization
          </p>
        </div>
      </div>

      <div className="bg-white mt-5 p-4">
        <h3 className="text-md font-medium mb-3 flex items-center">
          <Briefcase className="h-5 w-5 mr-2 text-primary" />
          Future Job Opportunities
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          This course prepares you for various career paths in the technology
          sector with strong job prospects and competitive salaries.
        </p>

        <div className="">
          <div className="rounded-lg p-4 shadow-sm">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Users className="h-4 w-4 mr-2 text-blue-500" />
              Potential Job Roles
            </h4>
            <ul className="space-y-1">
              <li className="text-sm flex items-start">
                <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Data Engineer</span>
              </li>{" "}
              <li className="text-sm flex items-start">
                <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Data Engineer</span>
              </li>
              <li className="text-sm flex items-start">
                <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Data Engineer</span>
              </li>{" "}
              <li className="text-sm flex items-start">
                <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Data Engineer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutCome;
