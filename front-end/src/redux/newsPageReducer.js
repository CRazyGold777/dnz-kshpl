
const SET_NEWS = "SET_NEWS";

const initiatState = {
	news: {
		data: "05.12.2022",
		title: "До 300-річчя Григорія",
		img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
		text: `До 300 річчя Григорія Савича Сковороди в ДНЗ “Корсунь-Шевченківський професійний ліцей” для здобувачів освіти 1 курсу проведена бібліотечна година “Мандрівний учитель життя”, адже спадщина композитора, поета, байкаря і філософа Григорія Савича Сковороди є безцінним надбанням української національної і світової культури.

		Афоризми від Григорія Сковороди
			
		«З усіх утрат утрата часу найтяжча»
			
		«Любов виникає з любові; коли хочу, щоб мене любили, я сам перший люблю»
			
		«Один у багатстві бідний, а інший у бідності багатий»
			
		«Сопілка і вівця дорожча царського вінця»
			
		«Якщо любиш прибуток, шукай його пристойним шляхом. Тисяча на те перед тобою благословенних ремесел»
			
		«Не той дурний, хто не знає… але той, хто знати не хоче»
			
		«Не за обличчя судіть, а за серце»
			
		«Життя наше – це подорож, а дружня бесіда – це візок, що полегшує мандрівникові дорогу»
			
		«Чисте небо не боїться блискавки та грому»
			
		«Що швидко запалюється, те раптово гасне»`,
		dopImg: ["https://k-shpl.ck.ua/wp-content/uploads/2022/12/318412688_890797951922912_6739935611560653892_n-768x1024.jpg", "https://k-shpl.ck.ua/wp-content/uploads/2022/12/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg"],
	},
}

export const newsPageReducer = (state = initiatState, action) => {
	switch (action.type) {
		case SET_NEWS:
			return {
				...state,
				news: [...action.news]
			}
		default:
			return state;
	}
}

const setNews = (news) => ({ type: SET_NEWS, news })

export const setNewsPageTC = (url) => dispatch => {
	console.log(url);
}