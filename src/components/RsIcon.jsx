import "../sass/items.scss";
const RsIcon = ({ to = "#",children}) => {
  return (
    <>
      <a href={to} className="flex justify-center items-center w-[35px] h-[35px] shadow-3d">
        {children}
      </a>
    </>
  );
};

export default RsIcon;
