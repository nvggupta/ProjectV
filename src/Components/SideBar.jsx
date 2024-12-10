import { useState } from "react";
import { MdArrowRight } from "react-icons/md";

function SideBar({ sideBarData, isSideBarOpen }) {
  const [openItems, setOpenItems] = useState(false);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div
      className={`absolute top-0 left-0 z-[2000] bg-white 0 z-100 h-[100vh] w-[350px]  border-2 text-black ${
        !isSideBarOpen ? "hidden" : "block"
      }`}
    >
      <ul>
        {sideBarData.map((item, index) => {
          return (
            <li key={index} className="p-2 border-b-2">
              {typeof item === "object" ? (
                <div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleItem(index)}>
                    <h1 className="text-xl font-bold">{Object.keys(item)}</h1>
                    <MdArrowRight />
                  </div>
                  {openItems[index] && (
                    <SideBar sideBarData={Object.values(item)[0]} isSideBarOpen={true} />
                  )}
                </div>
              ) : (
                <h1 className="text-xl font-bold">{item}</h1>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;