import { HTMLAttributes } from 'react';
import { classNames } from '../utilities/classes';

type Props = {
	backgroundColor?: string;
	children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({ backgroundColor, children, className }: Props) {
	return (
		<div
			className={classNames('flex w-[300px] h-[300px] text-white m-1 text-[2rem] p-5', className)}
			style={{ background: backgroundColor ?? '#fff' }}
		>
			{children}
		</div>
	);
}
