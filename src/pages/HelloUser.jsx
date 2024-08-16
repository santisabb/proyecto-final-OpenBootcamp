/* eslint-disable no-mixed-spaces-and-tabs */

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
		  <form action="" className="" onSubmit={handleSubmitText} >
				<label htmlFor="exampleFormControlInput1" className="form-label">Ingrese su nombre de usuario</label>
				<input ref={inputRef} type="text"/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		  <h3>holis {userName}</h3>
			<form action="" onSubmit={handleSubmitNumber}>
				<label htmlFor="exampleFormControlInput1">Ingrese un numero(del 1 al 826)</label>
				<input type="text" ref={inputRef2}/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
			<img src={imageUrl} alt='imagen de personaje de rick y morty'/>
		</>
	)
}
