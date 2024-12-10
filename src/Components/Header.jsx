/* eslint-disable react/prop-types */
import { useState,useContext } from "react";
import logo from "../../public/logo_web (1).png";
import { GrLocation } from "react-icons/gr";

import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

import { RestaurantContext } from "./Context/RestaurantContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userSelectIsOpen, setUserSelectIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("India");

  const { isSideBarOpen, setIsSideBarOpen } = useContext(RestaurantContext);
  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  console.log(isSideBarOpen);
  return (
    <div
      className={`relative flex flex-row justify-around items-center px-6 py-8  h-16 shadow-lg bg-white font-['mulish','sans-serif'] ${
        isSideBarOpen ? "backdrop-blur-sm bg-black/50" : ""
      }`}
    >
      {/* Logo and Location */}
      {/* Left Side Of Header */}
      <div className="flex items-start md:items-center space-x-6 w-1/3 gap-12 ">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="flex items-center space-x-2 cursor-pointer relative h-10"
        >
          <div className="h-[20px] w-[20px] bg-gray-200 rounded-full flex justify-center items-center">
            <GrLocation className="text-sm text-gray-700 rounded-full bg-gray-200" />
          </div>
          <div className="flex flex-col">
            <p className="text-[10px] text-gray-500">Select Location</p>
            <p className="text-[13px]">Jawaddi Ludhiana...</p>
          </div>
          {isOpen && (
            <div className="absolute top-10 left-0 z-[1000]">
              <Select
                setIsOpen={setIsOpen}
                setSelectedLocation={setSelectedLocation}
              />
            </div>
          )}
          <MdArrowDropDown />
        </div>
      </div>

      {/* Search and Actions */}
      {/* Right Side oF Header */}
      <div className="hidden md:flex items-center space-x-6 mt-4 md:mt-0">
        <div className="flex items-center space-x-2 cursor-pointer">
          <CiSearch className="text-lg text-gray-700 font-[800]" />
          <p className="text-[13px]">Search</p>
        </div>
        <div className="text-[13px] md:text-[13px] w-[90px] h-8 text-white bg-[#d92662] px-3 py-2 rounded-md flex justify-around items-center">
          <div className="w-[15px] h-[15px] rounded-full  border-2 border-white flex justify-center items-center">
            <div className="w-[7px] h-[7px] rounded-full  border-2 border-white"></div>
          </div>
          <p>Offers</p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
        <FontAwesomeIcon icon="fa-regular fa-user" />
          <p>Sign-In</p>
        </div>
        <div
          onMouseEnter={() => setUserSelectIsOpen(true)}
          onMouseLeave={() => setUserSelectIsOpen(false)}
          className="relative h-14 flex gap-5 items-center "
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 "></div>
          {userSelectIsOpen && (
            <div className="absolute top-12 z-[1000] right-0">
              <UserSelect setUserSelectIsOpen={setUserSelectIsOpen} />
            </div>
          )}
          <div className="flex items-center gap-2">
            <p className="text-[13px]">Hi Osahan</p>
            <MdArrowDropDown />
          </div>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <IoCartOutline className="text-xl text-gray-700" />
          <p className="text-[13px]">Cart</p>
        </div>
        <div className="text-2xl min-w-10" onClick={handleSideBar}>
          {!isSideBarOpen ? <AiOutlineMenu className="text-3xl"/> : <RxCross1 />}
        </div>
      </div>
    </div>
  );
}

export default Header;

export function Select({ setIsOpen, setSelectedLocation }) {
  const data = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
  ];
  const [dropdownData, setDropDownData] = useState(data);
  const [selectedData, setSelectedData] = useState("");
  const handleSearchData = (e) => {
    const searchData = e.target.value;
    const filterData = data.filter((item) => {
      return item.toLowerCase().includes(searchData.toLowerCase());
    });
    setDropDownData(filterData);
  };
  console.log(selectedData);
  console.log(dropdownData);
  const handleSelectData = (data) => {
    setSelectedLocation(data);
    setSelectedData(data);

    setIsOpen(false);
  };
  return (
    <div
      className="bg-white border border-gray-300 shadow-lg rounded-md p-4 h-fit w-64 dropdown-transition font-['mulish','sans-serif']"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="space-y-3">
        <li>
          <div className="flex items-center border-b border-gray-300 pb-2">
            <CiSearch className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Enter Your Location"
              className="ml-2 w-full text-[13px] focus:outline-none"
              onChange={(e) => handleSearchData(e)}
            />
          </div>
        </li>
        <li>
          <button
            disabled={true}
            className="w-full text-center text-gray-500 text-[13px] py-1"
          >
            Choose Your Location
          </button>
        </li>
        {dropdownData.map((data, ind) => (
          <li key={ind}>
            <label className="flex items-center justify-between text-[13px] cursor-pointer ">
              <span>{data}</span>
              <input
                type="radio"
                name="location"
                value={data}
                onClick={() => handleSelectData(data)}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function UserSelect({ setUserSelectIsOpen }) {
  const dropdownData = [
    "My Account",
    "Delivery Support",
    "Contact Us",
    "Term Of Use",
    "Privacy Policy",
    "Logout",
  ];

  return (
    <div
      className="bg-white border border-gray-300 shadow-lg rounded-md p-4 max-h-60 w-48 font-['mulish','sans-serif']"
      onMouseEnter={() => setUserSelectIsOpen(true)}
      onMouseLeave={() => setUserSelectIsOpen(false)}
    >
      <ul className="space-y-3">
        {dropdownData.map((data, ind) => (
          <li
            key={ind}
            className="text-[13px] text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}
