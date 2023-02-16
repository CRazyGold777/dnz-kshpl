import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderInfo } from './components/HeaderInfo/HeaderInfo';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';

function App() {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<header className='wrapper__header-indo'>
					<HeaderInfo />
				</header>
				<nav className='wrapper__header-menu'>
					<HeaderMenu />
				</nav>
				<div className='wrapper__content'>
					content
				</div>
				<div className='wrapper__footer'>footer</div>
				<div className='wrapper__footer-info'></div>
			</div>
		</BrowserRouter>
	);
}

export default App;
