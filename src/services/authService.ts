import axios from "../lib/axios"
import envConf from "../config/environments"

export const postLogin = async (
	credential: ICredentials
): Promise<any> => {
	try {
		const res = await axios.post(
			`${envConf.backendURL}/api/v1/auth/login`,
			{
				email: credential.email,
				password: credential.password
			}
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
}