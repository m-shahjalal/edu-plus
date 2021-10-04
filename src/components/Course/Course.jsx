import { FcOk } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import classes from './Course.module.css';

const Course = ({ course }) => {
	const { name, price, privilege, teacher } = course;
	return (
		<div className='w-full'>
			<div className={classes.contain}>
				<img
					className={classes.img}
					src={`https://source.unsplash.com/${teacher}`}
					alt='content'
				/>
				<h3 className={classes.super}>course</h3>
				<h2 className={classes.name}>
					<span>{name} </span> <span>{price}</span>
				</h2>
				<h2 className={classes.privilege}>What you get:</h2>
				<div className='leading-relaxed text-base'>
					{privilege.map((item) => (
						<div key={item} className={classes.flexContainer}>
							<FcOk key={teacher} size='1.4rem' />
							<div className={classes.flexItem}>{item}</div>
						</div>
					))}
				</div>
				<Link
					to={{
						pathname: `/courses/${course.teacher}`,
						state: course,
					}}
					className={classes.link}>
					View details
				</Link>
			</div>
		</div>
	);
};

export default Course;
