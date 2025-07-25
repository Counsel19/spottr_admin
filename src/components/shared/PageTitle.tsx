interface PageTitleProps {
  title: string;
  subTitle: string;
}

const PageTitle = ({ subTitle, title }: PageTitleProps) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logo_circle.svg"
        alt="logo_circle"
        className="w-[4.2rem] h-[4.2rem]"
      />
      <div className="space-y-2">
        <h3 className="text-[2.4rem]  font-semibold leading-[2.4rem]">{title}</h3>
        <p className=" text-[1.4rem] text-muted">{subTitle}</p>
      </div>
    </div>
  );
};

export default PageTitle;
