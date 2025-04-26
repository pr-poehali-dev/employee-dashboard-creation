
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Clock, ShoppingCart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SalesMetricsWidgetProps {
  workedHours: number;
  totalHours: number;
  dailySales: number;
  monthlyPlan: {
    current: number;
    target: number;
  };
}

const SalesMetricsWidget = ({
  workedHours,
  totalHours,
  dailySales,
  monthlyPlan,
}: SalesMetricsWidgetProps) => {
  const formatHours = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    return `${wholeHours} ч ${minutes} мин`;
  };

  const planPercentage = Math.round((monthlyPlan.current / monthlyPlan.target) * 100);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BarChart3 className="h-5 w-5 text-purple-500" />
          Показатели продаж
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-muted-foreground">Отработано сегодня</span>
            </div>
            <span className="text-lg font-medium">{formatHours(workedHours)}</span>
            <span className="text-xs text-muted-foreground">из {formatHours(totalHours)}</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <ShoppingCart className="h-4 w-4 text-green-500" />
              <span className="text-sm text-muted-foreground">Продаж сегодня</span>
            </div>
            <span className="text-lg font-medium">{dailySales}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">План на месяц</span>
            <span className="text-sm font-medium">
              {monthlyPlan.current} / {monthlyPlan.target}
            </span>
          </div>
          <Progress value={planPercentage} className="h-2" />
          <p className="text-xs text-right mt-1 text-muted-foreground">
            {planPercentage}% выполнено
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesMetricsWidget;
