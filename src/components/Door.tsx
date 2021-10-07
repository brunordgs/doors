import { classNames } from '../utilities/classes';

export default function Door({ selected }: { selected?: boolean }) {
	return (
		<div className="relative flex flex-col items-center w-[200px] h-[310px]">
			<div
				className={classNames(
					selected ? 'border-yellow-500' : 'border-yellow-800',
					'flex flex-grow border-l-[5px] border-t-[5px] border-r-[5px] w-[90%]',
				)}
			>
				<div className="flex flex-col items-center flex-grow p-[15px] bg-yellow-700">
					<div className={classNames(selected ? 'text-yellow-500' : 'text-white', 'text-5xl')}>
						3
					</div>
					<div
						className={classNames(
							selected ? 'bg-yellow-500' : 'bg-yellow-900',
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
