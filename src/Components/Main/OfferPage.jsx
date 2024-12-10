import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import pic1 from "../../img/pro1.jpg"
import pic2 from "../../img/pro2.jpg"
import pic3 from "../../img/pro3.jpg"
import pic4 from "../../img/pro4.jpg"
function OfferPage() {
  const images = [
    {
      id: 1,
      url: pic1,
      title: "Item 1"
    },
    {
      id: 2,
      url:  pic2,
      title: "Item 2"
    },
    {
      id: 3,
      url: pic3,
      title: "Item 3"
    },
    {
      id: 4,
      url: pic4,
      title: "Item 4"
    }
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <div className="border-2 px-5 py-3 h-fit  flex justify-center items-center">
    
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5 ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.title} className='rounded-lg h-[300px] w-[400px]' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default OfferPage