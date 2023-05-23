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
import { AdminNew } from './components/content-components/Admin/AdminNew';
import { AdminNotion } from './components/content-components/Admin/AdminNotion';
import { AdminNotions } from './components/content-components/Admin/AdminNotions';
import { AdminUser } from './components/content-components/Admin/AdminUser';
import { AdminTeachers } from './components/content-components/Admin/AdminTeachers';
import { AdminTeacher } from './components/content-components/Admin/AdminTeacher';
import { AdminStudents } from './components/content-components/Admin/AdminStudents';
import { AdminStudent } from './components/content-components/Admin/AdminStudent';
import { AdminCourses } from './components/content-components/Admin/AdminCourses';
import { AdminCourse } from './components/content-components/Admin/AdminCourse';
import { AdminSubjects } from './components/content-components/Admin/AdminSubjects';
import { AdminSubject } from './components/content-components/Admin/AdminSubject';
import { AdminLessons } from './components/content-components/Admin/AdminLessons';
import { AdminLesson } from './components/content-components/Admin/AdminLesson';
import { AboutUs } from './components/content-components/AboutUs/AboutUs';
import { NPC } from './components/content-components/NPC/NPC';
import { PupilsTeachers } from './components/content-components/PupilsTeachers/PupilsTeachers';
import { Entrants } from './components/content-components/Entrants/Entrants';


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
							<Route path="news-page/:id" element={<NewsPage />} />
							<Route path="about-us" element={<AboutUs />} />
							<Route path="pupils-teachers/timetable/" element={<TimeTable />} />
							<Route path="pupils-teachers/" element={<PupilsTeachers />} />
							<Route path="npc" element={<NPC />} />
							<Route path="entrant" element={<Entrants />} />



							<Route path="admin" element={<Admin />} />
							<Route path="admin/users" element={<AdminUsers />} />
							<Route path="admin/user/:id" element={<AdminUser />} />
							<Route path="admin/user/create" element={<AdminUser />} />
							<Route path="admin/news" element={<AdminNews />} />
							<Route path="admin/new/:id" element={<AdminNew />} />
							<Route path="admin/new/create" element={<AdminNew />} />
							<Route path="admin/notions" element={<AdminNotions />} />
							<Route path="admin/notion/:id" element={<AdminNotion />} />
							<Route path="admin/notion/create" element={<AdminNotion />} />

							<Route path="admin/teacher" element={<AdminTeachers />} />
							<Route path="admin/teacher/:id" element={<AdminTeacher />} />
							<Route path="admin/teacher/create" element={<AdminTeacher />} />

							<Route path="admin/student" element={<AdminStudents />} />
							<Route path="admin/student/:id" element={<AdminStudent />} />
							<Route path="admin/student/create" element={<AdminStudent />} />

							<Route path="admin/course" element={<AdminCourses />} />
							<Route path="admin/course/:id" element={<AdminCourse />} />
							<Route path="admin/course/create" element={<AdminCourse />} />

							<Route path="admin/subject" element={<AdminSubjects />} />
							<Route path="admin/subject/:id" element={<AdminSubject />} />
							<Route path="admin/subject/create" element={<AdminSubject />} />

							<Route path="admin/lesson" element={<AdminLessons />} />
							<Route path="admin/lesson/:id" element={<AdminLesson />} />
							<Route path="admin/lesson/create" element={<AdminLesson />} />

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
