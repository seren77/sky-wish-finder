import Header from "@/components/Header";
import FlightSearchForm from "@/components/FlightSearchForm";
import PopularDestinations from "@/components/PopularDestinations";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Plane } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-sky/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
            <Plane className="w-4 h-4" />
            수백 개의 항공사를 한 번에 검색
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            최저가 항공권,<br />
            <span className="text-primary">한 번에 비교</span>하세요
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            전 세계 항공사와 여행사의 요금을 비교하여<br className="hidden sm:block" />
            가장 합리적인 가격으로 여행을 시작하세요.
          </p>
        </div>

        {/* Search Form */}
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <FlightSearchForm />
        </div>
      </section>

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Features */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
