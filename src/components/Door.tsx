import { useState } from 'react';
import DoorModel from '../models/door';
import { classNames } from '../utilities/classes';

interface Props {
	value: DoorModel;
	onChange(newDoor: DoorModel): void;
}

export default function Door({ value, onChange }: Props) {
	const [selected, isSelected] = useState(false);

	function toggleSelect() {
		onChange(value.toggleSelect());
	}

	return (
		<div className="relative flex flex-col items-center w-[200px] h-[310px]" onClick={toggleSelect}>
			<div
				className={classNames(
					value.selected ? 'border-yellow-500' : 'border-yellow-800',
					'flex flex-grow border-l-[5px] border-t-[5px] border-r-[5px] w-[90%]',
				)}
			>
				<div className="flex flex-col items-center flex-grow p-[15px] bg-yellow-700">
					<div
						className={classNames(value.selected ? 'text-yellow-500' : 'text-white', 'text-5xl')}
					>
						{value.number}
					</div>
					<div
						className={classNames(
							value.selected ? 'bg-yellow-500' : 'bg-yellow-900',
							'absolute self-start w-[20px] h-[20px] rounded-[10px]',
						)}
						style={{ top: 'calc(0.45 * 310px)' }}
					/>
				</div>
			</div>

			<div className="h-[10px] w-full bg-white" />
		</div>
	);
}
