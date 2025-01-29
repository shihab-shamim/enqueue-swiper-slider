import { useRef, useEffect } from "react";

const Swiper = () => {
        const swiperRef = useRef(null);
        const pageRef = useRef(null);
        const prevRef = useRef(null);
        const nextRef = useRef(null);
        useEffect(() => {

          new window.Swiper(swiperRef.current, {
            direction: "horizontal",
            loop: true,
            pagination: {
              el: pageRef.current,
              clickable: true,
            },
            navigation: {
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            },
          });
        }, []);
    return (
        <div
        className="swiper"
        style={{ width: "600px", height: "300px" }}
        ref={swiperRef}
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{background:"red"}}>Slide 1</div>
          <div className="swiper-slide" style={{background:"green"}}>Slide 2</div>
          <div className="swiper-slide" style={{background:"black"}}>Slide 3</div>
        </div>
        <div className="swiper-pagination" ref={pageRef}></div>
        <div className="swiper-button-prev" ref={prevRef}></div>
        <div className="swiper-button-next" ref={nextRef}></div>
      </div>
    );
};

export default Swiper;