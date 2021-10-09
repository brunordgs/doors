import Card from '../components/Card';
import Link from 'next/link';

export default function Form() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div>
				<Card backgroundColor="#c0392c">
					<h1 className="text-6xl font-bold leading-tight">Monty Hall</h1>
				</Card>
				<Card></Card>
			</div>

			<div>
				<Card></Card>
				<Card backgroundColor="#28a085" className="p-0">
					<Link href="#">
						<a className="flex-1 p-5 text-6xl font-bold leading-tight flex items-center justify-center">
							Start
						</a>
					</Link>
				</Card>
			</div>
		</div>
	);
}
