import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.brand}>
				<Link to='/' className={classes.logo}>
					<span className='ml-3 text-xl'>EDU+</span>
				</Link>
				<nav className={classes.nav}>
					<Link to='/' className={classes.link}>
						Home
					</Link>
					<Link to='/about' className={classes.link}>
						About us
					</Link>
					<Link to='/services' className={classes.link}>
						Services
					</Link>
					<Link to='/contact' className={classes.link}>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
