import Course from '../Course/Course';
import classes from './Courses.module.css';
const Courses = ({ course }) => {
	return (
		<section className={classes.courses}>
			<div className={classes.coursesInner}>
				<div className={classes.header}>
					<div className={classes.col1}>
						<h1 className={classes.lead}>
							Popular Courses in EDU+
						</h1>
						<div className={classes.bottom}></div>
					</div>
					<p className={classes.tagline}>
						Edu plus started up in January 2010, and we have been on
						an epic ride ever since. Since our inception, we have
						tried to stay true to our core beliefs –Be inspired and
						to deliver an exceptional experience for our
						subscribers.
					</p>
				</div>
				<div className={classes.cards}>
					{course &&
						course.map((item) => (
							<Course course={item} key={item.teacher} />
						))}
				</div>
			</div>
		</section>
	);
};

export default Courses;
