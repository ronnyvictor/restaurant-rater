import { useContext } from 'react'
import { Col, Row } from 'antd'
import RestaurantCard from '../components/RestaurantCard'
import { RestaurantContext } from '../App'
import Loading from '../components/Loading'

export default function Home() {
	const { restaurants } = useContext(RestaurantContext)

	return (
		<>
			<div>
				{!restaurants ? (
					<Loading />
				) : (
					<Row>
						{restaurants.map((restaurant) => {
							return (
								<RestaurantCard key={restaurant.id} restaurant={restaurant} />
							)
						})}
					</Row>
				)}
			</div>

			{/* <div>
				<Loading />
			</div> */}
		</>
	)
}
