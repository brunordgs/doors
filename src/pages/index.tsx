import Card from '../components/Card';
import Link from 'next/link';
import NumberInput from '../components/NumberInput';
import { useState } from 'react';

export default function Form() {
	const [doorsAmount, setDoorsAmount] = useState(3);
	const [doorWithGift, setDoorWithGift] = useState(1);

	const validateAmountHandler = (value: number) => (value < 0 ? 0 : value > 14 ? 14 : value);

	return (
		<div className="flex items-center justify-center h-screen flex-col">
			<div className="flex">
				<Card backgroundColor="#c0392c">
					<h1 className="text-6xl font-bold leading-tight">Monty Hall</h1>
				</Card>
				<Card>
					<NumberInput
						label="Doors amount"
						value={doorsAmount}
						onChange={(newDoorAmount) => setDoorsAmount(validateAmountHandler(newDoorAmount))}
					/>
				</Card>
			</div>

			<div className="flex">
				<Card>
					<NumberInput
						label="Door with gift"
						value={doorWithGift}
						onChange={(newDoorWithGift) => setDoorWithGift(validateAmountHandler(newDoorWithGift))}
					/>
				</Card>
				<Card backgroundColor="#28a085" className="p-0">
					<Link href={`/game/${doorsAmount}/${doorWithGift}`}>
						<a className="flex-1 p-5 text-6xl font-bold leading-tight flex items-center justify-center">
							Start
						</a>
					</Link>
				</Card>
			</div>
		</div>
	);
}
