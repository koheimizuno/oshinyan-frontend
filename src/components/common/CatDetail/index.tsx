import { Slider } from "@mui/material";

const CatDetail = () => {
  // return (
  //   <div className="bg-white p-[24px] pb-[40px]">

  //   </div>
  // );
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Fade</h2>
      <Slider {...settings}>
        <div>
          <img src={"/assets/imgs/cats/cat1.png"} />
        </div>
        <div>
          <img src={"/assets/imgs/cats/cat1.png"} />
        </div>
        <div>
          <img src={"/assets/imgs/cats/cat1.png"} />
        </div>
        <div>
          <img src={"/assets/imgs/cats/cat1.png"} />
        </div>
      </Slider>
    </div>
  );
};

export default CatDetail;
