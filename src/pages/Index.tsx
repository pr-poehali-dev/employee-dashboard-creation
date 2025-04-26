
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-8">Корпоративный портал сотрудников</p>
        <Link to="/profile">
          <Button className="flex items-center gap-2">
            <UserCircle className="h-5 w-5" />
            Перейти в личный кабинет
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
