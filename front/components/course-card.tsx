import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import OutCome from "./outcome-course";

// TODO: create type for course
// type CourseCardProps = {
//   title: string;
//   university: string;
//   description: string;
//   buttonText: string;
// };

const CourseCard: React.FC<any> = ({ course }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{course.name}</CardTitle>
          <CardDescription>{course.university}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{course.description}</p>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Course Outcome</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{course.title}</DialogTitle>
                <DialogDescription>{course.university}</DialogDescription>
              </DialogHeader>
              <OutCome course={course} />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default CourseCard;
