import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from '../pages/Home';
import FavoritesPage from '../pages/Favorites';
import Navigation from '../widgets/navigation/Navigation';
import './styles/index.css';

export default function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
