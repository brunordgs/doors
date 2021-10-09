import { FormEvent } from 'react';
import DoorModel from '../models/door';
import { classNames } from '../utilities/classes';

interface Props {
	value: DoorModel;
	onChange(newDoor: DoorModel): void;
	selected?: {
		background: string;
		border: string;
	};
}

export default function Door({ value, onChange }: Props) {
	const selected = {
		background: value.selected && !value.opened ? 'bg-yellow-500' : 'bg-yellow-900',
		border: value.selected && !value.opened ? 'border-yellow-500' : 'border-yellow-800',
	};

	function toggleSelect() {
		onChange(value.toggleSelect());
	}

	return (
		// Area
		<div className="relative flex flex-col items-center w-[200px] h-[310px]" onClick={toggleSelect}>
			{/* Structure */}
			<div
				className={classNames(
					selected.border,
					'flex flex-grow border-l-[5px] border-t-[5px] border-r-[5px] w-[90%] bg-[#0005]',
				)}
			>
				{!value.opened && <RenderDoor value={value} onChange={onChange} selected={selected} />}
			</div>

			{/* Floor */}
			<div className="h-[10px] w-full bg-white" />
		</div>
	);
}

function RenderDoor({ value, onChange, selected }: Props) {
	function openHandler(e: FormEvent) {
		e.stopPropagation();
		onChange(value.toggleOpen());
	}

	return (
		// Door
		<div className="flex flex-col items-center flex-grow p-[15px] bg-yellow-700">
			{/* Number */}
			<div className={classNames(value.selected ? 'text-yellow-500' : 'text-white', 'text-5xl')}>
				{value.number}
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
