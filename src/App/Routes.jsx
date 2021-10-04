import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import NotFound from '../components/NotFound/NotFound';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import Services from '../screens/ServicesScreen';
import SingleScreen from '../screens/SingleScreen';

const Routes = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={HomeScreen} />
				<Route exact path='/about' component={AboutScreen} />
				<Route exact path='/services' component={Services} />
				<Route exact path='/contact' component={ContactScreen} />
				<Route exact path='/courses/:id' component={SingleScreen} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default Routes;
