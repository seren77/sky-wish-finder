import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SkyFinder</span>
            </div>
            <p className="text-muted-foreground text-sm">
              전 세계 항공권을 한 번에 비교하고 최저가로 예약하세요.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">회사</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">회사 소개</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">채용 정보</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">언론 보도</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">고객 지원</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">도움말 센터</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">문의하기</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">환불 정책</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">법적 고지</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">이용약관</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">개인정보처리방침</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">쿠키 정책</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 SkyFinder. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">🇰🇷 한국어</span>
            <span className="text-muted-foreground text-sm">KRW ₩</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
