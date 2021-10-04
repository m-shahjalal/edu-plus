import classes from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={classes.main}>
			<div className={classes.notFound}>
				<div className={classes.top}>
					<div className={classes.header}>
						<h1 className={classes.number}>404</h1>
						<h1 className='text-4xl font-medium py-8'>
							oops! Page not found
						</h1>
						<p className=' pb-8 px-12'>
							Oops! The page you are looking for does not exist.
							It might have been moved or deleted.
						</p>
						<button className={classes.button}>HOME</button>
						<button className={classes.contactUsBtn}>
							Contact Us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
