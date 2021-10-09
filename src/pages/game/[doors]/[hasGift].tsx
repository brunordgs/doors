import { useEffect, useState } from 'react';
import Door from '../../../components/Door';
import { createDoors, updateDoors } from '../../../utilities/doors';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function Game() {
	const router = useRouter();

	const [doors, setDoors] = useState([]);

	useEffect(() => {
		const { doors, hasGift } = router.query;

		setDoors(createDoors(+doors, +hasGift));
	}, [router.query]);

	function renderDoors() {
		return doors.map((door) => {
			return (
				<Door
					key={door.number}
					door={door}
					onChange={(newDoor) => {
						setDoors(updateDoors(doors, newDoor));
					}}
				/>
			);
		});
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-wrap self-stretch justify-around">{renderDoors()}</div>

			<div className="flex justiy-center mt-[40px] bg-red-500 hover:bg-red-600 text-white text-[2rem] rounded-md cursor-pointer">
				<Link href="/">
					<a className="py-[10px] px-[25px]">Restart game</a>
				</Link>
			</div>
		</div>
	);
}
