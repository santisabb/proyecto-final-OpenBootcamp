/* eslint-disable no-mixed-spaces-and-tabs */

import { useRef, useState } from "react"



export default function HelloUser() {

	const [userName, setUserName] = useState('')

	const inputRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		const inputElement = inputRef.current
		const value = inputElement.value
		setUserName(value)
	}


	return (
		<>
		  <form action="" className="" onSubmit={handleSubmit} >
				<label htmlFor="exampleFormControlInput1" className="form-label">Ingrese su nombre de usuario</label>
				<input ref={inputRef} type="text" className="form-control"/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		  <h3>holis {userName}</h3>
		</>
	)
}
