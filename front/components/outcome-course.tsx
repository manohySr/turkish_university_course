import { Briefcase, ChevronRight, LightbulbIcon, Users } from "lucide-react";

// TODO: Use course type

const OutCome = ({ course }: { course: any }) => {
  const { outcome, jobOpportunities } = course;
  return (
    <div className="bg-primary/5 rounded-lg p-4">
      <h3 className="text-md font-medium mb-3 flex items-center">
        <LightbulbIcon className="h-5 w-5 mr-2 text-primary" />
        Learning Outcomes
      </h3>

      <div className="space-y-1 mt-2">
        {outcome.length > 0 ? (
          outcome.map((item: any, index: any) => (
            <div key={index} className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm">{item}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No outcomes available</p>
        )}
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
              {jobOpportunities.length > 0 ? (
                jobOpportunities.map((role: any, index: any) => (
                  <li key={index} className="text-sm flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{role}</span>
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-500">No roles available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutCome;
