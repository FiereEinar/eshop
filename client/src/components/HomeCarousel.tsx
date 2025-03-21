import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles, it works, but it's giving red lines in the editor
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function HomeCarousel() {
	return (
		<div className='rounded-md overflow-hidden'>
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				loop={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className='mySwiper'
			>
				<SwiperSlide>
					<CarouselImage src='./images/11.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage src='./images/22.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage src='./images/33.jpg' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

function CarouselImage({ src }: { src: string }) {
	return (
		<div
			className='bg-cover bg-center w-full h-[300px]'
			style={{ backgroundImage: `url('${src}')` }}
		></div>
	);
}
