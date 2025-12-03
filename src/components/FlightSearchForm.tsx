import { useState } from "react";
import { 
  Plane, 
  PlaneTakeoff, 
  PlaneLanding, 
  Calendar, 
  Users, 
  ArrowRightLeft,
  Search,
  ChevronDown
} from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState<"roundtrip" | "oneway">("roundtrip");
  const [origin, setOrigin] = useState("서울 (ICN)");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabinClass, setCabinClass] = useState("일반석");
  const [showPassengerPopover, setShowPassengerPopover] = useState(false);

  const swapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const updatePassenger = (type: keyof typeof passengers, increment: boolean) => {
    setPassengers(prev => ({
      ...prev,
      [type]: increment 
        ? prev[type] + 1 
        : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1)
    }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Trip Type Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTripType("roundtrip")}
          className={cn(
            "px-5 py-2.5 rounded-full font-medium transition-all duration-200",
            tripType === "roundtrip" 
              ? "bg-primary text-primary-foreground shadow-md" 
              : "bg-card text-muted-foreground hover:bg-secondary"
          )}
        >
          왕복
        </button>
        <button
          onClick={() => setTripType("oneway")}
          className={cn(
            "px-5 py-2.5 rounded-full font-medium transition-all duration-200",
            tripType === "oneway" 
              ? "bg-primary text-primary-foreground shadow-md" 
              : "bg-card text-muted-foreground hover:bg-secondary"
          )}
        >
          편도
        </button>
      </div>

      {/* Search Form Card */}
      <div className="bg-card rounded-2xl shadow-card p-6 space-y-4">
        {/* Origin & Destination Row */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Origin */}
          <div className="flex-1 w-full">
            <label className="text-sm text-muted-foreground mb-1.5 block">출발지</label>
            <div className="relative">
              <PlaneTakeoff className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="어디에서 출발하시나요?"
                className="search-input pl-12"
              />
            </div>
          </div>

          {/* Swap Button */}
          <button 
            onClick={swapLocations}
            className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 shrink-0 mt-6 md:mt-0"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>

          {/* Destination */}
          <div className="flex-1 w-full">
            <label className="text-sm text-muted-foreground mb-1.5 block">도착지</label>
            <div className="relative">
              <PlaneLanding className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="어디로 가시나요?"
                className="search-input pl-12"
              />
            </div>
          </div>
        </div>

        {/* Date & Passengers Row */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Departure Date */}
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-1.5 block">가는 날</label>
            <Popover>
              <PopoverTrigger asChild>
                <button className="search-input pl-12 text-left relative w-full">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  {departDate ? format(departDate, "M월 d일 (EEE)", { locale: ko }) : "날짜 선택"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={departDate}
                  onSelect={setDepartDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Return Date */}
          {tripType === "roundtrip" && (
            <div className="flex-1">
              <label className="text-sm text-muted-foreground mb-1.5 block">오는 날</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="search-input pl-12 text-left relative w-full">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    {returnDate ? format(returnDate, "M월 d일 (EEE)", { locale: ko }) : "날짜 선택"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Passengers */}
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-1.5 block">승객 및 좌석</label>
            <Popover open={showPassengerPopover} onOpenChange={setShowPassengerPopover}>
              <PopoverTrigger asChild>
                <button className="search-input pl-12 text-left relative w-full flex items-center justify-between">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <span>{totalPassengers}명, {cabinClass}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4" align="start">
                <div className="space-y-4">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">성인</p>
                      <p className="text-sm text-muted-foreground">만 12세 이상</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updatePassenger('adults', false)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >-</button>
                      <span className="w-6 text-center">{passengers.adults}</span>
                      <button 
                        onClick={() => updatePassenger('adults', true)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >+</button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">소아</p>
                      <p className="text-sm text-muted-foreground">만 2-11세</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updatePassenger('children', false)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >-</button>
                      <span className="w-6 text-center">{passengers.children}</span>
                      <button 
                        onClick={() => updatePassenger('children', true)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >+</button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">유아</p>
                      <p className="text-sm text-muted-foreground">만 2세 미만</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updatePassenger('infants', false)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >-</button>
                      <span className="w-6 text-center">{passengers.infants}</span>
                      <button 
                        onClick={() => updatePassenger('infants', true)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >+</button>
                    </div>
                  </div>

                  {/* Cabin Class */}
                  <div className="border-t border-border pt-4">
                    <p className="font-medium mb-2">좌석 등급</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["일반석", "프리미엄 일반석", "비즈니스석", "일등석"].map((cls) => (
                        <button
                          key={cls}
                          onClick={() => setCabinClass(cls)}
                          className={cn(
                            "px-3 py-2 rounded-lg text-sm transition-colors",
                            cabinClass === cls 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-secondary hover:bg-secondary/80"
                          )}
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => setShowPassengerPopover(false)}
                    className="w-full"
                  >
                    완료
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Search Button */}
        <Button className="w-full py-6 text-lg font-semibold mt-4 gap-2">
          <Search className="w-5 h-5" />
          항공권 검색
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
