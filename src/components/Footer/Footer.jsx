import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footerInner}>
				<div className={classes.brand}>
					<Link to='#' className={classes.logo}>
						EDU+
					</Link>
					<p className={classes.subtitle}>
						Take a course to change you and your surroundings.
					</p>
				</div>
				<div className={classes.list}>
					<div className={classes.division}>
						<h2 className={classes.title}>SERVICES</h2>
						<nav className={classes.nav}>
							<li>
								<Link to='#' className={classes.link}>
									ILTS
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									GRE
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									GMAT
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									IBA MBA
								</Link>
							</li>
						</nav>
					</div>
					<div className={classes.division}>
						<h2 className={classes.title}>IMPORTANT</h2>
						<nav className={classes.nav}>
							<li>
								<Link to='#' className={classes.link}>
									Success stories
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									Gallery
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									Entertain
								</Link>
							</li>
						</nav>
					</div>
					<div className={classes.division}>
						<h2 className={classes.title}>CATEGORIES</h2>
						<nav className={classes.nav}>
							<li>
								<Link to='#' className={classes.link}>
									First{' '}
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									Second{' '}
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									Third{' '}
								</Link>
							</li>
							<li>
								<Link to='#' className={classes.link}>
									Fourth{' '}
								</Link>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className={classes.bottom}>
				<div className={classes.bottomInner}>
					<p className={classes.bottomInner}>
						© 2021 EDU+ —
						<Link
							to='#'
							rel='noopener noreferrer'
							className={classes.bottomLink}
							target='_blank'>
							@Shahjalal
						</Link>
					</p>
					<span className={classes.span}>
						<Link to='#' className='text-gray-500'>
							<BsFacebook size='1rem' />
						</Link>
						<Link to='#' className='ml-3 text-gray-500'>
							<AiFillTwitterSquare size='1rem' />
						</Link>
						<Link to='#' className='ml-3 text-gray-500'>
							<BsInstagram size='1rem' />
						</Link>
						<Link to='#' className='ml-3 text-gray-500'>
							<BsLinkedin size='1rem' />
						</Link>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
