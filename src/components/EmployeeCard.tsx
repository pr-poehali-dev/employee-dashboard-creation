
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

interface EmployeeCardProps {
  name: string;
  position: string;
  department: string;
  avatarUrl?: string;
}

const EmployeeCard = ({ name, position, department, avatarUrl }: EmployeeCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <img 
              src={avatarUrl || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150"} 
              alt={name} 
              className="aspect-square h-full w-full object-cover"
            />
          </Avatar>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{position}</p>
            <p className="text-xs text-muted-foreground">{department}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default EmployeeCard;
