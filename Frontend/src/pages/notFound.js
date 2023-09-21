import React from 'react'
import notfound from '../Img/404.png'
const notFound = () => {
	return (
		<div className="notfoundContainer">
			<img src={require('../Img/404.png')}/>
		</div>
	)
}

export default notFound