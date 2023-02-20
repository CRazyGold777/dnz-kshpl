
const SET_NEWS = "SET_NEWS";

const initiatState = {
	newsArray: [
		{
			id: 1,
			link: "news=1",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
		{
			id: 2,
			link: "news=2",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
		{
			id: 1,
			link: "news=1",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
		{
			id: 2,
			link: "news=2",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
		{
			id: 1,
			link: "news=1",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
		{
			id: 2,
			link: "news=2",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
		{
			id: 1,
			link: "news=1",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
		{
			id: 2,
			link: "news=2",
			title: "До 300-річчя Григорія",
			img: "https://k-shpl.ck.ua/wp-content/uploads/2021/03/318216364_1379409356135550_1803281234786392850_n-1024x768.jpg",
			subText: "Мандівний учитель життя до 300-річчя від дня народження Григорія Сковороди",
		},
	],
	countNews: 8,
}

export const newsReducer = (state = initiatState, action) => {
	switch (action.type) {
		case SET_NEWS:
			return {
				...state,
				newsArray: [...action.newsArray]
			};
		default:
			return state;
	}
}

const setNewsArray = (newsArray) => ({ type: SET_NEWS, newsArray })

export const setNewsTC = (count) => dispatch => {

}