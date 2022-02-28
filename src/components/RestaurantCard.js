import { createContext, useContext, useState } from 'react'
import { Rate, Card, Image } from 'antd'

import { RestaurantContext } from '../App'
import RestaurantModal from './RestaurantModal'

const { Meta } = Card

export const SelectedRestaurantContext = createContext()

export default function RestaurantCard({ restaurant }) {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const { setSelectedRestaurant } = useContext(RestaurantContext)

	const onClick = () => {
		setSelectedRestaurant(restaurant)
		setIsModalVisible(true)
	}

	const roundedRating = Math.round(restaurant.rating * 10) / 10

	return (
		<>
			<div onClick={onClick}>
				<Card
					hoverable
					style={{ width: 200, height: 290 }}
					cover={
						<Image
							preview={false}
							height={150}
							width={200}
							alt={restaurant.name}
							src={restaurant.photoUrl}
						/>
					}
				>
					<Meta title={restaurant.name} />
					<Rate disabled allowHalf defaultValue={roundedRating} />
					<p>{roundedRating}</p>
				</Card>
			</div>
			<SelectedRestaurantContext.Provider
				value={{ setIsModalVisible, restaurant, isModalVisible, roundedRating }}
			>
				<RestaurantModal />
			</SelectedRestaurantContext.Provider>
		</>
	)
}
