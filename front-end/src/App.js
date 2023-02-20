import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderInfo } from './components/HeaderInfo/HeaderInfo';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { FooterInfo } from './components/FooterInfo/FooterInfo';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/content-components/Main/Main';
import { News } from './components/content-components/News/News';
import { NewsPage } from './components/content-components/NewsPage/NewsPage';


function App() {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<header className='wrapper__header-info'>
					<HeaderInfo />
				</header>
				<nav className='wrapper__header-menu'>
					<HeaderMenu />
				</nav>
				<div className='wrapper__content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Main />} />
							<Route path="news" element={<News />} />
							<Route path="news-page" element={<NewsPage />} />
							<Route path="*" element={404} />
						</Routes>
					</div>
				</div>
				<div className='wrapper__footer'>
					<Footer />
				</div>
				<div className='wrapper__footer-info'>
					<FooterInfo />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
