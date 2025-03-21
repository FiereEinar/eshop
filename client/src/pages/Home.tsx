import HomeCarousel from '@/components/HomeCarousel';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<section className='px-40 py-10 space-y-5'>
			<HomeCarousel />
			<div className='flex justify-between items-center'>
				<h4 className='font-semibold'>
					Grab the best deals on{' '}
					<span className='text-custom-primary'>Lipsticks</span>
				</h4>
				<Link className='transition-all hover:text-custom-primary' to={'/'}>
					View all
				</Link>
			</div>
		</section>
	);
}
