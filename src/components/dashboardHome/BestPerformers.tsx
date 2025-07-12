import { Star, BarChart3, ChevronDown, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PiHeartStraightFill } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";
import { BsBarChartFill } from "react-icons/bs";
import UserAvatar from "../shared/molecules/UserAvatar";

interface Performer {
  id: string;
  name: string;
  location: string;
  avatar: string;
  itemsSold?: number;
  rating?: number;
  peopleRated?: number;
}

const topSellers: Performer[] = [
  {
    id: "1",
    name: "John Tommy",
    location: "Lagos, Nigeria",
    avatar: "/lovable-uploads/d1d1848b-1651-4e72-81b9-0a6f1a156337.png",
    itemsSold: 5786,
  },
  {
    id: "2",
    name: "John Tommy",
    location: "Lagos, Nigeria",
    avatar: "/lovable-uploads/d1d1848b-1651-4e72-81b9-0a6f1a156337.png",
    itemsSold: 4687,
  },
];

const bestRated: Performer[] = [
  {
    id: "1",
    name: "John Tommy",
    location: "Lagos, Nigeria",
    avatar: "/lovable-uploads/d1d1848b-1651-4e72-81b9-0a6f1a156337.png",
    rating: 5.0,
    peopleRated: 4567,
  },
  {
    id: "2",
    name: "John Tommy",
    location: "Lagos, Nigeria",
    avatar: "/lovable-uploads/d1d1848b-1651-4e72-81b9-0a6f1a156337.png",
    rating: 5.0,
    peopleRated: 4567,
  },
  {
    id: "3",
    name: "John Tommy",
    location: "Lagos, Nigeria",
    avatar: "/lovable-uploads/d1d1848b-1651-4e72-81b9-0a6f1a156337.png",
    rating: 5.0,
    peopleRated: 4567,
  },
];

const BestPerformers = () => {
  return (
    <Card className="w-full h-full shadow-none">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="font-bold text-primary text-[1.6rem]">
            Best performers
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-slate-500">
            <span className="sr-only">More options</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="top-sellers" className="w-full">
          <TabsList className="grid h-full w-full grid-cols-3 mb-6 bg-slate-50">
            <TabsTrigger
              value="top-sellers"
              className="flex items-center  gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <PiHeartStraightFill className="size-8 text-blue-500" />
              <span className="hidden sm:inline">Top sellers</span>
              <span className="sm:hidden">Top</span>
            </TabsTrigger>
            <TabsTrigger
              value="best-rated"
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <PiStarFill className="size-8 text-amber-500" />
              <span className="hidden sm:inline">Best Rated</span>
              <span className="sm:hidden">Rated</span>
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <BsBarChartFill className="size-8 text-purple-500" />
              <span className="hidden sm:inline">Leaderboard</span>
              <span className="sm:hidden">Board</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="top-sellers" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[1.2rem] text-slate-700">
                Top Sellers
              </h3>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {topSellers.map((seller, index) => (
                <div
                  key={seller.id}
                  className={`p-4 rounded-lg ${
                    index === 0 ? "bg-[#FFF0CF]" : "bg-light-blue"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <UserAvatar
                      imgUrl="/images/avatar.png"
                      name={seller.name}
                      height="h-[5.8rem]"
                      width="w-[5.8rem]"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[1rem] text-slate-800">
                        {seller.name}
                      </h4>
                      <p className="text-sm font-semibold text-slate-500">
                        {seller.location}
                      </p>
                      <div className="flex items-center gap-1 mt-1 p-2  bg-[#E3E8F082]">
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-600">
                          {seller.itemsSold?.toLocaleString()} items sold
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="best-rated" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[1.2rem] text-slate-700">
                Best Rating
              </h3>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {bestRated.map((performer) => (
                <div
                  key={performer.id}
                  className="p-4 border rounded-lg bg-yellow-50 text-center "
                >
                  <div className="relative mx-auto mb-3">
                    <div className="mx-auto w-fit">
                      <UserAvatar
                        name="John Tommy"
                        height="h-[4.6rem] "
                        width="w-[4.6rem]"
                        imgUrl="/images/avatar.png"
                      />
                    </div>
                    <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {performer.rating}
                    </Badge>
                  </div>
                  <div className="space-y-6 mt-[3rem]">
                    <div className="space-y-4">
                      <h4 className="font-bold leading-[1.2rem] text-[1.2rem] text-primary mb-1">
                        {performer.name}
                      </h4>
                      <p className="text-sm text-slate-500 mb-2">
                        {performer.location}
                      </p>
                    </div>
                    <p className="text-sm bg-[#FFB21126] p-2 text-[#E09B09] font-medium">
                      {performer.peopleRated?.toLocaleString()} people rated
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[1.2rem] text-slate-700">
                Leaderboard
              </h3>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-center py-8 text-slate-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-slate-300" />
              <p>Leaderboard data coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BestPerformers;
