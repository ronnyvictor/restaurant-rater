import { useContext } from 'react'
import { Rate, Modal, Image } from 'antd'

import { SelectedRestaurantContext } from './RestaurantCard'

export default function RestaurantModal() {
	const { restaurant, isModalVisible, setIsModalVisible, roundedRating } =
		useContext(SelectedRestaurantContext)

	const hideModal = () => {
		setIsModalVisible(false)
	}

	return (
		<div>
			<Modal
				title={restaurant.name}
				visible={isModalVisible}
				onOk={hideModal}
				onCancel={hideModal}
			>
				<Image
					preview={false}
					width={'100%'}
					src={restaurant.photoUrl}
					alt={restaurant.name}
				/>

				<Rate disabled allowHalf defaultValue={roundedRating} />
			</Modal>
		</div>
	)
}
