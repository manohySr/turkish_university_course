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

type CourseCardProps = {
  title: string;
  university: string;
  description: string;
  buttonText: string;
};

const MachineLearningCard: React.FC<CourseCardProps> = ({
  title,
  university,
  description,
  buttonText,
}: CourseCardProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{university}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">{buttonText}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{university}</DialogDescription>
              </DialogHeader>
              <OutCome />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default MachineLearningCard;
