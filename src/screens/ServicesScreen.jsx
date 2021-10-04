import { useEffect, useState } from 'react';
import Courses from '../components/Courses/Courses';

const Services = () => {
	const [course, setCourse] = useState([]);
	useEffect(() => {
		fetch('./course.json')
			.then((res) => res.json())
			.then((data) => setCourse(data));
	}, []);
	return (
		<div style={{ marginTop: '56px' }}>
			<Courses course={course} />
		</div>
	);
};

export default Services;
