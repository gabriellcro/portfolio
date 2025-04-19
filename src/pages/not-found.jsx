import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <section className="flex flex-col w-full h-screen justify-center items-center gap-12">
      <div className="flex w-full justify-center items-center gap-5">
        <h1 className="text-2xl">404</h1>
        <Separator orientation="vertical" className="h-[40px] w-[1px] border" />
        <p className="font-normal text-sm">
          Esta página não pôde ser encontrada
        </p>
      </div>

      <Button onClick={handleClick} size="sm">
        <ArrowLeft />
        Voltar para página anterior
      </Button>
    </section>
  );
}
