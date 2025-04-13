import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/pages/home";

export default function Layout() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Container childers={<HomePage/>}/>
      <Footer />
    </section>
  );
}
