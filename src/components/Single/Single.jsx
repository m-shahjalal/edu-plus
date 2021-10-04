import { FcOk } from 'react-icons/fc';
import { useLocation } from 'react-router';

const Single = () => {
	const { state } = useLocation();

	return (
		<div className='max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-32'>
			<img
				className='object-cover w-full h-96'
				src={`https://source.unsplash.com/${state.teacher}`}
				alt='Article'
			/>

			<div className='p-6'>
				<div>
					<span className='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>
						Course
					</span>

					<p className=' text-4xl mt-5 text-gray-600 dark:text-gray-400 flex justify-between items-center'>
						<span>{state.name}</span>
						<span>{state.price}</span>
					</p>
				</div>
				<hr className='mt-4' />

				<div className='mt-8 p-8'>
					<h2 className='text-2xl mb-4'>What you get:</h2>
					<div className='leading-relaxed text-base'>
						{state.privilege.map((item) => (
							<div
								key={item}
								className='flex gap-4 mt-5 items-center'>
								<FcOk key={state.teacher} size='1.4rem' />
								<div>{item}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Single;
