import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import burger from "../../img/icons/Burger.png";
import coffee from "../../img/icons/Coffee.png";
import colaCan from "../../img/icons/ColaCan.png";
import breakfast from "../../img/icons/Breakfast.png";
import fries from "../../img/icons/Fries.png";
import hotdog from "../../img/icons/Hotdog.png";
import pizza from "../../img/icons/Pizza.png";
import salad from "../../img/icons/Salad.png";
import sandwich from "../../img/icons/Sandwich.png";
import steak from "../../img/icons/Steak.png";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function MenuPage() {
  const carauselData = [
    { img: burger, text: "Burger" },
    { img: coffee, text: "Coffee" },
    { img: colaCan, text: "ColaCan" },
    { img: breakfast, text: "Breakfast" },
    { img: fries, text: "Fries" },
    { img: hotdog, text: "HotDog" },
    { img: pizza, text: "Pizza" },
    { img: salad, text: "Salad" },
    { img: sandwich, text: "Sandwich" },
    { img: steak, text: "Steak" },
  ];

  return (
    <div className="border-2 px-5   bg-gray-200 h-[120px] flex justify-center items-center">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        partialVisbile={false}
      >
        {carauselData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  items-center text-center bg-white p-4 rounded-lg shadow-md"
            style={{ width: "100%" }}
          >
            <img src={item.img} alt={item.text} className="w-12 h-[1rem] mb-3 object-contain scale-[2.5]" />
            <p className="text-sm font-['mulish','sans-serif']">{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MenuPage;
