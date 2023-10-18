import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles/carrousel.css'

const Carrousel = ({images, title}) => {
  return (
    <div className='carrousel-container'>
      <h4 className='sede-carrousel-title'>{title}</h4>
      <Swiper className='carrousel'
      spaceBetween={5}
      slidesPerView={1}
      >
        {images.map(image=> {

          return(
            <SwiperSlide className='carrousel-img'><img src={image}/></SwiperSlide>
          )})
        }
    </Swiper>
    </div>
  );
}

export default Carrousel