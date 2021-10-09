import { useState } from 'react';
import Door from '../components/Door';
import DoorModel from '../models/door';

export default function Home() {
	const [firstDoor, setFirstDoor] = useState(new DoorModel(1));

	return (
		<div className="flex flex-col">
			<input type="text" />
			<Door value={firstDoor} onChange={(newDoor) => console.log(newDoor)} />
		</div>
	);
}
