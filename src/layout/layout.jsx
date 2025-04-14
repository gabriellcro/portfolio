import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/pages/home";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[1920px] m-auto">
      <Header />
      <Container childers={<HomePage/>}/>
      <Footer />
    </div>
  );
}
