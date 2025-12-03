import { Shield, Search, Bell, Wallet } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "한 번에 비교",
    description: "수백 개의 항공사와 여행사를 한 번에 검색하여 최적의 항공권을 찾으세요."
  },
  {
    icon: Wallet,
    title: "최저가 보장",
    description: "실시간 가격 비교로 항상 가장 저렴한 요금을 확인할 수 있습니다."
  },
  {
    icon: Bell,
    title: "가격 알림",
    description: "원하는 노선의 가격이 변동되면 즉시 알림을 받아보세요."
  },
  {
    icon: Shield,
    title: "안전한 예약",
    description: "검증된 파트너사를 통해 안전하고 신뢰할 수 있는 예약을 제공합니다."
  }
];

const Features = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
        왜 SkyFinder인가요?
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        전 세계 수백만 명의 여행자들이 SkyFinder를 통해 최적의 항공권을 찾고 있습니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 100 + 300}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
