import { FormEvent } from 'react';
import DoorModel from '../models/door';
import { classNames } from '../utilities/classes';
import Gift from './Gift';

interface Props {
	door: DoorModel;
	onChange(newDoor: DoorModel): void;
	selected?: {
		background: string;
		border: string;
	};
}

export default function Door({ door, onChange }: Props) {
	const selected = {
		background: door.selected && door.closed ? 'bg-yellow-500' : 'bg-yellow-900',
		border: door.selected && door.closed ? 'border-yellow-500' : 'border-yellow-800',
	};

	function toggleSelect() {
		onChange(door.toggleSelect());
	}

	return (
		// Area
		<div className="relative flex flex-col items-center w-[200px] h-[310px] cursor-pointer" onClick={toggleSelect}>
			{/* Structure */}
			<div
				className={classNames(
					selected.border,
					'flex flex-col-reverse flex-grow border-l-[5px] border-t-[5px] border-r-[5px] w-[90%] bg-[#0005]',
				)}
			>
				{door.closed ? (
					<RenderDoor door={door} onChange={onChange} selected={selected} />
				) : (
					door.hasGift && <Gift />
				)}
			</div>

			{/* Floor */}
			<div className="h-[10px] w-full bg-white" />
		</div>
	);
}

function RenderDoor({ door, onChange, selected }: Props) {
	function openHandler(e: FormEvent) {
		e.stopPropagation();
		onChange(door.toggleOpen());
	}

	return (
		// Door
		<div className="flex flex-col items-center flex-grow p-[15px] bg-yellow-700">
			{/* Number */}
			<div className={classNames(door.selected ? 'text-yellow-500' : 'text-white', 'text-5xl')}>
				{door.number}
			</div>

			{/* Knob */}
			<div
				className={classNames(
					selected.background,
					'absolute self-start w-[20px] h-[20px] rounded-[10px]',
				)}
				style={{ top: 'calc(0.45 * 310px)' }}
				onClick={openHandler}
			/>
		</div>
	);
}
