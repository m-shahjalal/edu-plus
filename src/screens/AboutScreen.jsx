const AboutScreen = () => {
	return (
		<div className='container mx-auto pt-20'>
			<div className='w-full px-4 md:px-6 text-xl text-gray-800 leading-normal'>
				<div className='font-sans'>
					<h1 className='font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl pb-28 mt-20 text-center'>
						👋 Welcome to Our platform...
					</h1>
				</div>

				<div className='grid grid-cols-2 items-center gap-5 pb-20'>
					<p className='py-6'>
						At Capstone, we believe there is a better way to provide
						education. A more interesting and effective way where
						students can learn rather than just attend classes.
						We’re obsessively passionate about it, and our mission
						is to help students achieve their dream. We focus on
						students’ learning. Learning has been the least
						emphasized aspect of our education and we see that as an
						opportunity: We’re excited to simplify Education for
						everyone through our guidance, care, and inspiration
					</p>
					<img
						src='https://source.unsplash.com/dWYU3i-mqEo'
						alt='random'
						className='rounded-lg'
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutScreen;
