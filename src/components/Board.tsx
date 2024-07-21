import CustomButton from './CustomButton';

type BoardProps = {
	length: number;
	width: number;
};

export default function Board({
	length,
	width,
}: {
	length: number;
	width: number;
}): JSX.Element {
	return (
		<>
			<div className="board-row">
				<CustomButton label="1" className="square"></CustomButton>
				<CustomButton label="2" className="square"></CustomButton>
				<CustomButton label="3" className="square"></CustomButton>
			</div>
			<div className="board-row">
				<CustomButton label="4" className="square"></CustomButton>
				<CustomButton label="5" className="square"></CustomButton>
				<CustomButton label="6" className="square"></CustomButton>
			</div>
		</>
	);
}
