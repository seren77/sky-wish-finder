import { MapPin } from "lucide-react";

interface Destination {
  city: string;
  country: string;
  price: string;
  image: string;
}

const destinations: Destination[] = [
  {
    city: "도쿄",
    country: "일본",
    price: "189,000원~",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop"
  },
  {
    city: "방콕",
    country: "태국",
    price: "249,000원~",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=300&fit=crop"
  },
  {
    city: "파리",
    country: "프랑스",
    price: "689,000원~",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop"
  },
  {
    city: "뉴욕",
    country: "미국",
    price: "789,000원~",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
  },
  {
    city: "싱가포르",
    country: "싱가포르",
    price: "299,000원~",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop"
  },
  {
    city: "오사카",
    country: "일본",
    price: "169,000원~",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&h=300&fit=crop"
  }
];

const PopularDestinations = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">인기 여행지</h2>
          <p className="text-muted-foreground mt-1">서울에서 출발하는 최저가 항공권</p>
        </div>
        <a href="#" className="text-primary font-medium hover:underline">
          전체 보기
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <div
            key={dest.city}
            className="destination-card group opacity-0 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-1 text-primary-foreground/80 text-sm mb-1">
                <MapPin className="w-4 h-4" />
                <span>{dest.country}</span>
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">{dest.city}</h3>
              <p className="text-primary-foreground font-semibold">
                {dest.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
