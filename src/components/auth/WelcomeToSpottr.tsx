import { Bell, MoveRight } from "lucide-react";
import BenenfitsCards from "./organism/BenenfitsCards";
import { Link } from "react-router-dom";
import routeConstants from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const WelcomeToSpottr = () => {
  return (
    <div className=" bg-primary flex flex-col justify-center gap-[6rem] items-center relative">
      <img
        src="/images/auth-bg.svg"
        className=" absolute  h-[80%] top-0 left-0"
      />
      <div className="text-white">
        <h3 className="font-medium text-[4.721rem] leading-[4.721rem]">
          Welcome to
        </h3>
        <h1 className="font-semibold text-[9.571rem] leading-[9.571rem]">
          Spottr
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 relative w-[80%] mx-auto">
        <BenenfitsCards
          description="Discover the amazing world of opportunities around you in the spottR AI powered ecosystem."
          heading={
            <span className="flex items-center">
              <Bell /> Discover Opportunities
            </span>
          }
        />
        <BenenfitsCards
          description="Discover the amazing world of opportunities around you in the spottR AI powered ecosystem."
          heading={
            <span className="flex items-center">
              <Bell /> Discover Opportunities
            </span>
          }
        />
        <BenenfitsCards
          description="Discover the amazing world of opportunities around you in the spottR AI powered ecosystem."
          heading={
            <span className="flex items-center">
              <Bell /> Discover Opportunities
            </span>
          }
        />
        <BenenfitsCards
          description="Discover the amazing world of opportunities around you in the spottR AI powered ecosystem."
          heading={
            <span className="flex items-center">
              <Bell /> Discover Opportunities
            </span>
          }
        />
      </div>

      <div className="text-white text-[1.8rem] flex gap-[2rem] items-center">
        <p>Open your own account</p>
        <MoveRight />
        <Link
          className={cn(
            buttonVariants({
              className:
                "bg-white rounded-4xl text-primary font-semibold text-[1.4rem] hover:bg-sky-blue ",
            })
          )}
          to={routeConstants.login}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default WelcomeToSpottr;
