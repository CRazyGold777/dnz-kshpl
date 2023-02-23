import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderInfo } from './components/HeaderInfo/HeaderInfo';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { FooterInfo } from './components/FooterInfo/FooterInfo';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/content-components/Main/Main';
import { News } from './components/content-components/News/News';
import { NewsPage } from './components/content-components/NewsPage/NewsPage';
import { Login } from './components/content-components/Login/Login';
import { PageNotFound } from './components/content-components/PageNotFound/PageNotFound';
import { TimeTable } from './components/content-components/TimeTable/TimeTable';
import { Admin } from './components/content-components/Admin/Admin';
import { AdminUsers } from './components/content-components/Admin/AdminUsers';
import { AdminNews } from './components/content-components/Admin/AdminNews';
import { AdminNotion } from './components/content-components/Admin/AdminNotion';


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
							<Route path="login" element={<Login />} />
							<Route path="news" element={<News />} />
							<Route path="news-page" element={<NewsPage />} />
							<Route path="pupils-teachers/timetable/" element={<TimeTable />} />
							<Route path="admin" element={<Admin />} />
							<Route path="admin/users" element={<AdminUsers />} />
							<Route path="admin/news" element={<AdminNews />} />
							<Route path="admin/notion" element={<AdminNotion />} />
							<Route path="*" element={<PageNotFound />} />
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
