interface IsportAction {
	key: string,
	active: boolean,
	group: string,
	details: string,
	title: string
}
interface IsportDataAction {
	data: sportAction[] | any,
	loading: boolean
}
interface IsportCard {
	sport_key: string,
	group: string,
	details: string,
	title: string
}