interface IoddAction {
	id: string,
	sport_key: string,
	sport_nice: string,
	teams: any,
	commence_time: number,
	home_team: string,
	sites: {
		site_key: string,
		site_nice: string,
		last_update: number,
		odds: any
	}
}
interface IoddDataAction {
	data: IoddAction[] | any,
	loading: boolean
}
interface IoddCard {
	id: string,
	sport_nice: string,
	teams: any,
	commerce_time: number,
	home_team: string
}
interface IoddParam {
	sport_key: string,
	region: string,
	mkt: string
}
