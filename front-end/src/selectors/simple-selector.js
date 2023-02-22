export const getNews = state => {
	return state.news.newsArray;
}

export const getCountNews = state => {
	return state.news.countNews;
}

export const getNewsPage = state => {
	return state.newsPage.news;
}

export const getCountNotion = state => {
	return state.notion.countNotion;
}

export const getNotion = state => {
	return state.notion.notionArray;
}