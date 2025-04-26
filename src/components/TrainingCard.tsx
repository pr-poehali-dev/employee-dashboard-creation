
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";

interface TrainingCardProps {
  title: string;
  description: string;
  progress: number;
  deadline?: string;
}

const TrainingCard = ({ title, description, progress, deadline }: TrainingCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        {deadline && (
          <CardDescription className="text-xs">
            Срок: {deadline}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{description}</p>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Прогресс</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingCard;
