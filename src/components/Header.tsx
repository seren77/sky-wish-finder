import { Plane, User, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <Plane className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">SkyFinder</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">항공권</a>
        <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">호텔</a>
        <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">렌터카</a>
      </nav>
      
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <Globe className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
          <User className="w-5 h-5 text-foreground" />
          <span className="hidden sm:inline text-foreground font-medium">로그인</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
