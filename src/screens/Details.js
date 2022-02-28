import { useContext } from 'react'
import { RestaurantContext } from '../App'

export default function Details() {
  const { selectedRestaurant } = useContext(RestaurantContext)
  // console.log(selectedRestaurant)
	return (
		<>
			<img src={selectedRestaurant.photoUrl} alt='restaurant' />
			<h2>{selectedRestaurant.name}</h2>
		</>
	)
}
