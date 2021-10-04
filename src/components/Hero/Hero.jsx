import { BsArrowRightShort } from 'react-icons/bs';
import lead from '../../images/banner.jpg';
import classes from './Hero.module.css';
const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.innerHero}>
				<div className={classes.top}>
					<h1 className={classes.lead}>
						IBA, DU EMBA, Pvt. University,
						<br className='hidden lg:inline-block' />
						Jobs, Spoken & Writing
					</h1>
					<div className='mb-8 leading-relaxed'>
						<div className='home-subtitle'>
							<span className='flex mb-2'>
								<BsArrowRightShort size='2rem' />
								information
							</span>
							<span className='flex mb-2'>
								<BsArrowRightShort size='2rem' />
								inspiration
							</span>

							<span className='flex mb-2'>
								<BsArrowRightShort size='2rem' />
								guidelines
							</span>
							<span className='flex mb-2'>
								<BsArrowRightShort size='2rem' />
								preparation aid
							</span>
						</div>
					</div>
					<div className='flex justify-center'>
						<button className={classes.login}>Log in</button>
						<button className={classes.signup}>Sign up</button>
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src={lead}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
