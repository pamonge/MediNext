import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './CarouselComponentStyles.module.css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import emergencyDr from '../../assets/images/emergency-dr.jpeg'
import virtualAppointment from '../../assets/images/virtual-appointment.jpeg'
import dentist from '../../assets/images/dentist-carousel.jpg'

export const CarouselComponent = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{delay: 3000}}
    loop={true}
    >
        <SwiperSlide>
			<div className={styles.imgContainer}>
				<h5 className={styles.overlayText}>Comprometidos con su salud</h5>
				<img src={emergencyDr} alt="Dr at emergency room" className={styles.carouselImg} />
			</div>
        </SwiperSlide>
        <SwiperSlide>
			<div className={styles.imgContainer}>
				<h5 className={styles.overlayText}>Atención de calidad</h5>
				<img src={virtualAppointment} alt="Dr at a Virtual Appointment" className={styles.carouselImg} />	
			</div>
        </SwiperSlide>
        <SwiperSlide>
			<div className={styles.imgContainer}>	
				<h5 className={styles.overlayText}>Todas las especialidades</h5>
				<img src={dentist} alt="Dentist" className={styles.carouselImg} />
			</div> 
        </SwiperSlide>
    </Swiper>
  )
}
