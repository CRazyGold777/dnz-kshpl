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

export const getMessage = state => {
	return state.auth.message
}

export const isAuth = state => {
	return state.auth.isAuth
}

export const getStatus = state => {
	return state.auth.statusUser
}

export const getAUsersSelect = state => {
	return state.adminUsers.users
}
export const getAUserscount = state => {
	return state.adminUsers.count
}