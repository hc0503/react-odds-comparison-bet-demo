import axios from 'axios'

import envConfig from '../config/environments'

export const fetchAll: any = async (param: IoddParam) => {
	const res = await axios.get(`${envConfig.apiURL}/odds/?apiKey=${envConfig.apiKey}&sport=${param.sport_key}&region=${param.region}&mkt=${param.mkt}`)
	return res.data
}