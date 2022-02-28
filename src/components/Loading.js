import { Skeleton, Card, Row } from 'antd'
import SkeletonImage from 'antd/lib/skeleton/Image'
import SkeletonInput from 'antd/lib/skeleton/Input'

const { Meta } = Card

export default function Loading() {
	return (
		<Row>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
			<Card
				style={{ width: 200, height: 290 }}
				cover={<SkeletonImage />}
				height={150}
				width={200}
			>
				<Skeleton active />
			</Card>
		</Row>
	)
}
