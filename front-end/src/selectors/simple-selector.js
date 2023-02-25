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
export const getAUser = state => {
	return state.adminUsers.user
}
export const getSSubNew = state => {
	return state.adminUsers.subNews
}
export const getNew = state => {
	return state.adminUsers.new
}
export const getNotions = state => {
	return state.adminUsers.notions
}
export const getNotion = state => {
	return state.adminUsers.notion
}
export const getNotionFromNR = state => {
	return state.notion.nArray
}
