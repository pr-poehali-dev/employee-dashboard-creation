
import ProfileNavigation from "@/components/ProfileNavigation";
import EmployeeCard from "@/components/EmployeeCard";
import ScheduleCard from "@/components/ScheduleCard";
import MeetingWidget from "@/components/MeetingWidget";
import SalesRankingWidget from "@/components/SalesRankingWidget";
import TasksWidget from "@/components/TasksWidget";
import SalesMetricsWidget from "@/components/SalesMetricsWidget";
import ActionButtons from "@/components/ActionButtons";
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
  
  const todayTasks = [
    { id: "1", title: "Подготовить отчет по продажам", completed: true },
    { id: "2", title: "Провести встречу с клиентом ООО 'Альфа'", completed: false },
    { id: "3", title: "Внести данные новых клиентов в CRM", completed: false },
    { id: "4", title: "Изучить новые материалы по продукту", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileNavigation />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Первая колонка */}
          <div className="space-y-6">
            <EmployeeCard 
              name="Иванов Иван Иванович"
              position="Менеджер по продажам"
              department="Отдел продаж"
            />
            
            <MeetingWidget 
              title="Еженедельная планерка отдела"
              date="Пн, 28 апреля"
              time="09:30"
              link="https://meet.company.ru/123456"
            />
            
            <ActionButtons />
          </div>
          
          {/* Вторая колонка */}
          <div className="space-y-6">
            <SalesRankingWidget 
              position={5}
              totalEmployees={30}
              percentile={17}
              trend="up"
              department="Отдел продаж"
            />
            
            <TasksWidget initialTasks={todayTasks} />
          </div>
          
          {/* Третья колонка */}
          <div className="space-y-6">
            <SalesMetricsWidget 
              workedHours={6.25}
              totalHours={8}
              dailySales={2}
              monthlyPlan={{
                current: 15,
                target: 40
              }}
            />
            
            <ScheduleCard date={new Date()} items={todaySchedule} />
          </div>
          
          {/* Четвертая колонка */}
          <div className="space-y-6">
            <ScheduleCard date={addDays(new Date(), 1)} items={tomorrowSchedule} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
