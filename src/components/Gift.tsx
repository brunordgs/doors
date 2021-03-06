export default function Gift() {
	return (
		<div className="flex flex-col items-center relative">
			<div className="w-[100px] h-[25px] bg-[#7aa944]" />
			<div className="w-[90px] h-[60px] bg-[#5c7e32]" />
			<div className="absolute bg-red-600 w-[15px] h-[85px]" />
			<div className="absolute bg-red-600 w-[90px] h-[15px] top-[40px]" />
		</div>
	);
}
