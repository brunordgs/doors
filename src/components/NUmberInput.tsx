interface Props {
	label: string;
	value: number;
	onChange(newValue: number): void;
}

export default function NumberInput({ label, value, onChange }: Props) {
	const decrementHandler = () => onChange(value - 1);
	const incrementHandler = () => onChange(value + 1);

	return (
		<div className="flex flex-col items-center justify-center text-black flex-1">
			<span className="text-gray-600 text-2xl">{label}</span>
			<span className="text-8xl">{value}</span>
			<div className="flex text-5xl">
				<button className="bg-gray-200 hover:bg-gray-300 w-[80px] h-[80px] m-1 rounded-md" onClick={decrementHandler}>-</button>
				<button className="bg-gray-200 hover:bg-gray-300 w-[80px] h-[80px] m-1 rounded-md" onClick={incrementHandler}>+</button>
			</div>
		</div>
	);
}
