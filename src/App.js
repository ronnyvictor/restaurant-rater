import { createContext, useState, useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.css'
import Home from './screens/Home'
import Details from './screens/Details'

export const RestaurantContext = createContext()

function App() {
	const [restaurants, setRestaurants] = useState()
	const [selectedRestaurant, setSelectedRestaurant] = useState()

	useEffect(() => {
		fetch('https://bocacode-intranet-api.web.app/restaurants')
			.then((res) => res.json())
			.then((data) => {
				// console.log(data)
				setRestaurants(data)
			})
			.catch(console.error)
	}, [])

	return (
		<div>
			<RestaurantContext.Provider
				value={{
					restaurants,
					setRestaurants,
					selectedRestaurant,
					setSelectedRestaurant,
				}}
			>
				<>
					<Home />
				</>
			</RestaurantContext.Provider>
		</div>
	)
}

export default App
