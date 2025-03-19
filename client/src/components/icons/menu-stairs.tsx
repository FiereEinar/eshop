type MenuStairsProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

export default function MenuStairs({
	width = '1.5rem',
	height = '1.5rem',
	stroke = '#000000',
}: MenuStairsProps) {
	return (
		<svg
			className='svg-icon'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 6H20M4 12H14M4 18H9'
				stroke={stroke}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
