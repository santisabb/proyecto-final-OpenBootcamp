/* eslint-disable no-mixed-spaces-and-tabs */
import Form from "../components/Form.jsx"
import { useRef, useState, useEffect } from "react"

const rymLink = 'https://rickandmortyapi.com/api/character/'

export default function HelloUser() {

	const [userName, setUserName] = useState('')
	const [characterId, setCharacterId] = useState(3)
	const [imageUrl, setImageUrl] = useState('')

	const inputRef = useRef(null)
	const inputRef2 = useRef(null)

	const handleSubmitText = (e) => {
		e.preventDefault()
		const inputElement = inputRef.current
		const value = inputElement.value
		setUserName(value)
	}

	const handleSubmitNumber = (e) => {
		e.preventDefault()
		const inputElement = inputRef2.current
		const number = inputElement.value
		setCharacterId(number.toString())
	}

	useEffect(() => {
		fetch(`${rymLink}${characterId}`)
		    .then((response) => response.json())
			.then((data) =>{
				console.log(data)
				setImageUrl(data.image)
			})

	},)


	return (
		<>
		    <Form labelText={'Ingrese su nombre de usuario'} submitFunction={handleSubmitText} inputRef={inputRef} />

		    <h3>holis {userName}</h3>

		    <Form labelText={'Ingrese un numero(del 1 al 826)'} submitFunction={handleSubmitNumber} inputRef={inputRef2}></Form>

			<img src={imageUrl} alt='imagen de personaje de rick y morty'/>
		</>
	)
}
