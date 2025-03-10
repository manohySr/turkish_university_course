import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  title: string;
  description: string;
  content: string;
  buttonText: string;
};

const MachineLearningCard: React.FC<CourseCardProps> = ({
  title,
  description,
  content,
  buttonText,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default MachineLearningCard;
