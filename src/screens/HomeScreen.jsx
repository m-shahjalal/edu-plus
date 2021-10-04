import { useEffect, useState } from 'react';
import Courses from '../components/Courses/Courses';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';

const HomeScreen = () => {
	const [course, setCourse] = useState([]);
	useEffect(() => {
		fetch('./course.json')
			.then((res) => res.json())
			.then((data) => setCourse(data.slice(0, 4)));
	}, []);
	return (
		<>
			<Hero />
			<Services />
			<Courses course={course} />
		</>
	);
};

export default HomeScreen;
