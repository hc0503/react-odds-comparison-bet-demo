interface IoddSite {
	site_key: string,
	site_nice: string,
	last_update: number,
	odds: any
}
interface IoddAction {
	id: string,
	sport_key: string,
	sport_nice: string,
	teams: any,
	commence_time: number,
	home_team: string,
	sites: IoddSite[]
}
interface IoddDataAction {
	data: IoddAction[] | any,
	loading: boolean
}
interface IoddParam {
	sport_key: string,
	region: string,
	mkt: string
}
