import { Title } from '../../common-component/Title/Title'
import style from './PupilsTeachers.module.scss'
import img1 from '../../../img/jpg/about-us/11.jpg'
import img2 from '../../../img/jpg/pupils/1.jpg'
import { NavLink } from 'react-router-dom'

export const PupilsTeachers = props => {
	return <div className={style.pupils}>
		<Title text="Учням і педагогам" />
		<div className={style.block1}>
			<h2>ДНЗ “Корсунь-Шевченківський професійний ліцей” допоможе тобі реалізувати себе!</h2>
			<p>Ми прагнемо:</p>
			<ul>
				<li> Готувати фахівців, які здатні швидко реагувати на зміни середовища та знаходити себе на сучасному ринку праці.</li>
				<li>Надавати можливість роботодавцям спілкуватись з учнями з метою взаємного вибору місць проходження практики та подальшого працевлаштування.</li>
				<li>Допомагати кожному учневі та випускнику отримати роботу своєї мрії та здобути навички кар’єрного розвитку.</li>
			</ul>
			<h2>Будуй кар’єру разом із нами!</h2>
		</div>
		<div className={style.block2}>
			<img src={img1} alt="img" />
		</div>
		<div className={style.block3}>
			<div className={style.block3__out}>
				<div className={style.block3__in}>
					<p>Форма навчання: <span>денна</span></p>
					<p>Вартість навчання: <span>безкоштовно</span></p>
				</div>
			</div>

		</div>
		<div className={style.block4}>
			<div>
				<h3>Дуальна освіта</h3>
				<p>Учень поєднує навчання і стажування на підприємстві. При цьому отримує стипендію, близьку до заробітної плати.</p>
				<p>Форма дуальної освіти поєднує навчання учня в ліцеї на денній формі за спеціально розробленим графіком індивідуальних занять із його офіційним працевлаштуванням за фахом на підприємстві або організації та обов’язковим навчанням (стажуванням) на робочому місці.	Дуальну форму можуть обирати учні, які навчаються за денною формою навчання та виявили особисте бажання.</p>
				<p>Для переходу на дуальну форму навчання учень необхідно звернутись до адміністрації та повідомити про намір продовжити навчання за дуальною формою</p>
			</div>
			<div>
				<h3>ДЛЯ ПЕРЕХОДУ НА ДУАЛЬНУ ФОРМУ НАВЧАННЯ УЧЕНЬ ПОВИНЕН</h3>
				<ul>
					<li>Звернутися до директора ліцею або його заступників із заявою про перехід на дуальну форму навчання, при цьому учень повинен попередньо узгодити із керівництвом обраного ним підприємства можливість його навчання за дуальною формою;</li>
					<li>У разі позитивного рішення учень повинен укласти тристоронній договір із ліцеєм та підприємством чи організацією про його подальше навчання за дуальною формою.</li>
				</ul>
			</div>
			<div>
				<h3>ГОЛОВНА МЕТА</h3>
				<p>Діяльність НПЦ – реалізація завдань щодо вдосконалення практичної підготовки здобувачів освіти закладів професійної (професійно-технічної) освіти підвищення кваліфікації:</p>
				<ul>
					<li>педагогічних працівників, фахівців підприємств, організацій;</li>
					<li>впровадження у навчальний процес новітніх виробничих технологій зварювального виробництва із застосуванням сучасного обладнання, інструментів і матеріалів;</li>
					<li>організація співробітництва і взаємодії, постійного зв’язку між підприємствами та іншими професійно-технічними навчальними закладами;</li>
					<li>поширення інноваційних педагогічних та виробничих технологій, інформації щодо новітніх матеріалів, інструментів, обладнання.</li>
				</ul>
			</div>

			<div>
				<h3>Центр кар’єри</h3>
				<p>Центр професійної кар’єри – це помічник учнів у побудові успішної кар’єри та надійний партнер роботодавців у формуванні якісного кадрового резерву</p>
				<p>Основна мета центру – організація проходження виробничої практики та працевлаштування випускників та їх адаптація до практичної діяльності, сприяння розвитку підприємницької ініціативи, опанування навичками само презентації, техніки пошуку роботи, здійснення моніторингу їх кар’єри та соціальне партнерство з роботодавцями.</p>
				<p>Структура Центру</p>
				<ul>
					<li>Керівник центру – заступник директора з НВР</li>
					<li>Відповідальні за організацію виробничої практики та працевлаштування – старші майстри виробничого навчання</li>
					<li>Психолог</li>
					<li>Профконсультант</li>
				</ul>
			</div>
			<div>
				<h3>Навчально-практичний центр “Електромонтер з ремонту та обслуговування устаткування”</h3>
				<div className={style.block4__img}><img src={img2} alt="img" /></div>
				<p>З березня 2021р  на базі ДНЗ «Корсунь-Шевченківський професійний ліцей» відбулося відкриття навчально-практичного центру, де на сьогоднішній день готують  фахівців за професією  «Електромонтер з ремонту та обслуговування електроустаткування»</p>
				<p>Навчально-практичний центр у своїй діяльності керується Конституцією України, Законом України “Про освіту”, “Про професійну (професійно-технічну) освіту”, “Про повну загальну середню освіту”, “Положенням про організацію навчально-виробничого процесу в професійній (професійно-технічній) освіті”, Статутом ліцею, а також  Положенням про навчально-практичний центр (за галузевим спрямуванням) професійно-технічного навчального закладу.</p>
				<p>Навчально-практичний центр здійснює не лише первинну професійну підготовку, а й перепідготовку робітничих кадрів, підвищення кваліфікації, професійно-технічне навчання, стажування незайнятого населення.</p>
				<NavLink className={style.block4__npc} to="/npc" >НПЦ</NavLink>
			</div>
		</div>
		<div className={style.block5}>
			<div className={style.block5__out}>
				<div className={style.block5__in}>
					<h3>Пропонуємо учням та випускникам:</h3>
					<ul>
						<li>допомогу в працевлаштуванні;</li>
						<li>надання інформації про актуальні вакансії, місця для проходження практики та інші можливості від роботодавців;</li>
						<li>професійні та мотивуючі майстер-класи від успішних фахівців-практиків;</li>
						<li>тренінги з розвитку особистісних, професійних, кар’єрних, підприємницьких компетенцій, профконсультації з питань складання резюме та особливостей проходження співбесіди з роботодавцями.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
}