import { useState } from 'react'
import { setSkinsInfo } from '../API/API'
function AddSkin() {
	const [skinName, setSkinName] = useState('')
	const [skinId, setSkinId] = useState(0)
	const [message, setMessage] = useState(null)
	const [messageStyle, setMessageStyle] = useState('green')

	const addDataToDB = async () => {
		const body = {
			skinName,
			skinId
		}
		const res = await setSkinsInfo(body)
		if (res) {
			setMessage('Успешно')
			setMessageStyle('green')
			setTimeout(() => {
				setMessage(null)
			}, 3000)
		} else {
			setMessage('Ошибка')
			setMessageStyle('red')
			setTimeout(() => {
				setMessage(null)
			}, 3000)
		}
	}
	const setName = (e) => {
		e.preventDefault()
		setSkinName(e.target.value)
	}
	const setId = (e) => {
		e.preventDefault()
		setSkinId(e.target.value)
	}
	return (
		<div style={{ marginTop: "5px" }}>
			<input style={{ marginLeft: "10px" }} onChange={setName} type="text" placeholder='Название скина' />
			<input style={{ marginLeft: "10px" }} onChange={setId} type="number" placeholder='id скина' />
			{message && <span style={{ color: messageStyle, marginLeft: "10px" }}>{message}</span>}
			<div><button style={{ marginLeft: "10px", marginTop: "5px" }} onClick={addDataToDB} type="button" class="btn btn-success">Сохранить</button></div>
		</div>
	)
}

export default AddSkin