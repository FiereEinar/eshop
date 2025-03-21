import { Link } from 'react-router-dom';
import MenuStairs from './icons/menu-stairs';
import Search from './icons/search';
import { Input } from './ui/input';
import User from './icons/user';
import Cart from './icons/cart';
import { JSX } from 'react';

export default function Topbar() {
	return (
		<header className='border-b flex justify-between items-center gap-5 p-3'>
			<div className='flex items-center gap-1'>
				<MenuStairs width='2.5rem' height='2.5rem' />
				<h1 className='text-custom-primary text-2xl font-bold'>ShopLogo</h1>
			</div>

			<SearchBar />

			<div className='flex items-center'>
				<TopbarLink icon={<User />} text='Sign in' to='/signin' isLeft />
				<TopbarLink icon={<Cart />} text='Cart' to='/cart' />
			</div>
		</header>
	);
}

type TopbarLinkProps = {
	to: string;
	text: string;
	icon: JSX.Element;
	isLeft?: boolean;
};

function TopbarLink({ icon, text, to, isLeft }: TopbarLinkProps) {
	return (
		<Link to={to}>
			<div
				className={`flex items-center gap-1 ${isLeft && 'pr-3 mr-3 border-r'}`}
			>
				{icon}
				<h4 className='transition-all font-semibold hover:text-custom-primary text-nowrap'>
					{text}
				</h4>
			</div>
		</Link>
	);
}

function SearchBar() {
	return (
		<div className='relative flex'>
			<div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
				<Search />
			</div>
			<Input
				className='transition-all pl-10 md:w-[300px] bg-custom-secondary border-none'
				placeholder='Search'
			/>
		</div>
	);
}
