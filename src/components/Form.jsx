/* eslint-disable react/prop-types */


function Form({ labelText, submitFunction, inputRef }) {
	return (
		<form onSubmit={submitFunction}>
			<label htmlFor="exampleFormControlInput1">
				{labelText}
			</label>
			<input type="text" ref={inputRef}/>
			<button className='btn btn-primary' type='submit'>Submit</button>
		</form>
	)
}



export default Form
