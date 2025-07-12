import UserAvatar from "../shared/molecules/UserAvatar";

const topLocations = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Enugu",
  "Kaduna",
  "Benin City",
];

const topInterest = [
  {
    user: {
      image: "/images/avatar.png",
      name: "John Doe",
    },
    interest: "Cycling",
  },
  {
    user: {
      image: "/images/avatar.png",
      name: "Jane Smith",
    },
    interest: "Yoga",
  },
  {
    user: {
      image: "/images/avatar.png",
      name: "Alice Johnson",
    },
    interest: "Meditation",
  },
  {
    user: {
      image: "/images/avatar.png",
      name: "Bob Brown",
    },
    interest: "Running",
  },
];

const topCategories = [
  {
    user: {
      image: "/images/avatar.png",
      name: "John Doe",
    },
    category: "Aerospace",
  },
  {
    user: {
      image: "/images/avatar.png",
      name: "Jane Smith",
    },
    category: "Healthcare",
  },
  {
    user: {
      image: "/images/avatar.png",
      name: "Alice Johnson",
    },
    category: "Finance",
  },
];

const TopStats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-[1rem] border border-light-blue rounded-[1rem]">
      <div>
        <h2 className="text-[1.6rem] text-primary font-bold mb-[2rem]">
          Top Locations
        </h2>
        <div className="space-y-6">
          {topLocations.map((location, index) => (
            <LocationListItem key={index} location={location} sn={index + 1} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[1.6rem] text-primary font-bold mb-[2rem]">
          Top Interest
        </h2>
        <div className="space-y-6">
          {topInterest.map((interestItem, index) => (
            <InterestListItem
              key={index}
              interest={interestItem.interest}
              avaterImg={interestItem.user.image}
              sn={index + 1}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[1.6rem] text-primary font-bold mb-[2rem]">
          Top Categories
        </h2>
        <div className="space-y-6">
          {topCategories.map((categoryItem, index) => (
            <CategoryListItem
              key={index}
              category={categoryItem.category}
              avaterImg={categoryItem.user.image}
              sn={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStats;

const LocationListItem = ({
  location,
  sn,
}: {
  location: string;
  sn: number;
}) => {
  return (
    <div className="flex gap-4 items-center text-[1.4rem]">
      <span className="text-primary font-semibold">{sn}</span>
      <span>{location}</span>
    </div>
  );
};

const InterestListItem = ({
  avaterImg,
  interest,
  sn,
}: {
  avaterImg: string;
  interest: string;
  sn: number;
}) => {
  return (
    <div className="flex gap-4 items-center text-[1.4rem]">
      <span className="text-primary font-semibold">{sn}</span>
      <div className="flex items-center gap-2">
        <UserAvatar imgUrl={avaterImg} name={interest} />
        <span>{interest}</span>
      </div>
    </div>
  );
};

const CategoryListItem = ({
  avaterImg,
  category,
  sn,
}: {
  avaterImg: string;
  category: string;
  sn: number;
}) => {
  return (
    <div className="flex gap-4 items-center text-[1.4rem] border-b border-muted py-4 ">
      <span className="text-primary font-semibold">{sn}</span>
      <div className="flex items-center gap-2">
        <UserAvatar imgUrl={avaterImg} name={category} />
        <span>{category}</span>
      </div>
    </div>
  );
};
