
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, TrendingUp, Star } from "lucide-react";

interface RatingCardProps {
  position: number;
  score: number;
  trend: "up" | "down" | "stable";
  department?: string;
}

const RatingCard = ({ position, score, trend, department }: RatingCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Рейтинг сотрудника
          {department && <span className="text-sm font-normal">({department})</span>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-muted-foreground">Место</span>
            <span className="text-3xl font-bold">#{position}</span>
            {trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-muted-foreground">Баллы</span>
            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold">{score}</span>
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingCard;
