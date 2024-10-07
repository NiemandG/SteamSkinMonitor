
const getSkinsInfo = async () => {
	const requestOptions = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
		},
	}

	try {
		const result = await fetch("http://185.103.109.213/get-steam-info/getall", requestOptions)
		if (result.ok) {
			const resJSON = await result.json()
			return resJSON
		} else return null
	} catch (error) {
		return null
	}
}

const setSkinsInfo = async (body) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}

	try {
		const result = await fetch("http://185.103.109.213/get-steam-info/setskin", requestOptions)
		if (result.ok) {
			const resJSON = await result.json()
			return resJSON
		} else return null
	} catch (error) {
		return null
	}
}

export { getSkinsInfo, setSkinsInfo }