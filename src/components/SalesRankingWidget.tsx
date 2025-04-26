
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, TrendingUp, TrendingDown } from "lucide-react";

interface SalesRankingWidgetProps {
  position: number;
  totalEmployees: number;
  percentile?: number;
  trend: "up" | "down" | "stable";
  department?: string;
}

const SalesRankingWidget = ({
  position,
  totalEmployees,
  percentile,
  trend,
  department
}: SalesRankingWidgetProps) => {
  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />;
    return null;
  };

  const getPercentileText = () => {
    if (percentile === undefined) return null;
    return <span className="text-sm text-muted-foreground ml-1">Топ {percentile}%</span>;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-amber-500" />
          Рейтинг в продажах
          {department && <span className="text-sm font-normal">({department})</span>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold">#{position}</span>
              {getTrendIcon()}
            </div>
            <span className="text-sm text-muted-foreground">
              из {totalEmployees} сотрудников {getPercentileText()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesRankingWidget;
