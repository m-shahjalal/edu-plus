import { FcAdvertising, FcHome, FcMindMap } from 'react-icons/fc';
import classes from './Services.module.css';

const Services = () => {
	return (
		<section className={classes.services}>
			<div className={classes.servicesInner}>
				<div className={classes.header}>
					<h1 className={classes.lead}>
						Our exclusive services available for you
					</h1>
					<p className={classes.subtitle}>
						Edu plus want to make you more comfortable with next
						generation and teach you the skills you need
					</p>
					<div className={classes.bottom}>
						<div className={classes.bottomInner}></div>
					</div>
				</div>
				<div className={classes.listContainer}>
					<div className={classes.list}>
						<div className={classes.homeInner}>
							<FcHome size='3rem' />
						</div>
						<div className='flex-grow'>
							<h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
								private learning
							</h2>
							<p className='leading-relaxed text-base'>
								A teacher will be fixed to teach you what you
								wnat to learn
							</p>
						</div>
					</div>
					<div className={classes.list}>
						<div className={classes.consultInner}>
							<FcAdvertising size='3rem' />
						</div>
						<div className='flex-grow'>
							<h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
								Consulting
							</h2>
							<p className='leading-relaxed text-base'>
								A mentor will help you to overcome the
								difficulties of learning steps
							</p>
						</div>
					</div>
					<div className={classes.list}>
						<div className={classes.studyInner}>
							<FcMindMap size='3rem' />
						</div>
						<div className='flex-grow'>
							<h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
								Study Mate
							</h2>
							<p className='leading-relaxed text-base'>
								You will be able to participate in a study group
								with specific study information
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
