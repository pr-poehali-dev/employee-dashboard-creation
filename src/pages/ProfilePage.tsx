
import ProfileNavigation from "@/components/ProfileNavigation";
import EmployeeCard from "@/components/EmployeeCard";
import ScheduleCard from "@/components/ScheduleCard";
import TrainingCard from "@/components/TrainingCard";
import MeetingCard from "@/components/MeetingCard";
import RatingCard from "@/components/RatingCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, MailOpen } from "lucide-react";
import { addDays } from "date-fns";

const ProfilePage = () => {
  // Моковые данные для демонстрации
  const todaySchedule = [
    { startTime: "09:00", endTime: "10:30", title: "Встреча с руководителем отдела" },
    { startTime: "11:00", endTime: "12:00", title: "Работа над проектом А" },
    { startTime: "13:00", endTime: "14:00", title: "Обед" },
    { startTime: "14:30", endTime: "16:00", title: "Совещание по квартальному отчету" },
  ];

  const tomorrowSchedule = [
    { startTime: "09:30", endTime: "11:00", title: "Обучение по новой CRM" },
    { startTime: "12:00", endTime: "13:00", title: "Обед" },
    { startTime: "14:00", endTime: "17:00", title: "Работа над проектом Б" },
  ];
  
  const meetings = [
    { time: "10:00, сегодня", title: "Ежедневная планерка", participants: 8, hasNewMessages: true },
    { time: "15:30, завтра", title: "Квартальный отчет", participants: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileNavigation />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левая колонка */}
          <div className="space-y-6">
            <EmployeeCard 
              name="Иванов Иван Иванович"
              position="Старший специалист"
              department="Отдел разработки"
            />
            
            <RatingCard
              position={3}
              score={85}
              trend="up"
              department="Отдел разработки"
            />
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bell className="h-5 w-5 text-amber-500" />
                  Уведомления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 pb-2 border-b last:border-0">
                    <MailOpen className="h-4 w-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm">Новое сообщение от руководителя</p>
                      <p className="text-xs text-muted-foreground">2 часа назад</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MailOpen className="h-4 w-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm">Напоминание о планерке в 10:00</p>
                      <p className="text-xs text-muted-foreground">3 часа назад</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Средняя колонка */}
          <div className="space-y-6">
            <MeetingCard meetings={meetings} />
            
            <div className="grid grid-cols-1 gap-4">
              <TrainingCard 
                title="Java Script Advanced"
                description="Курс по углубленному изучению JavaScript с практическими заданиями"
                progress={65}
                deadline="15 мая 2025"
              />
              <TrainingCard 
                title="Управление проектами"
                description="Методология Agile и практика внедрения Scrum в команде"
                progress={30}
                deadline="1 июня 2025"
              />
            </div>
          </div>
          
          {/* Правая колонка */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <ScheduleCard date={new Date()} items={todaySchedule} />
              <ScheduleCard date={addDays(new Date(), 1)} items={tomorrowSchedule} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
