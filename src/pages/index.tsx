import { useState } from 'react';
import Door from '../components/Door';
import { createDoors, updateDoors } from '../utilities/doors';

export default function Home() {
	const [doors, setDoors] = useState(createDoors(3, 2));

	function renderDoors() {
		return doors.map((door) => {
			return (
				<Door
					key={door.number}
					value={door}
					onChange={(newDoor) => {
						setDoors(updateDoors(doors, newDoor));
					}}
				/>
			);
		});
	}

	return <div className="flex gap-4">{renderDoors()}</div>;
}
