import Image from "next/image";

const SidebarItems = ({
  section_name,
  icon_name,
  page_name,
  isActive,
}: {
  section_name: string;
  icon_name: string;
  page_name: string;
  isActive: boolean;
}) => {
  const location = window.location.pathname.split("/").at(-1);
  return (
    <div
      className={`items-center my-2 py-2 pl-2 gap-2 flex text-sm ${
        location == page_name || location == "manage" || isActive
          ? "bg-[#00B24F] rounded-md"
          : " "
      } `}
    >
      <Image
        src={`/icons/${icon_name}.svg`}
        width="25"
        height="100"
        alt="home fill"
      />
      <p className="">{`${section_name}`}</p>
    </div>
  );
};

export default SidebarItems;
