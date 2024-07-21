import CustomButton from '../components/CustomButton';
import logo from '../log2.png';

import Stack from '@mui/material/Stack';

function Dewey() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Click the buttons to get rid of all the larrys</p>

				<Stack spacing={2} direction="column">
					<CustomButton label="Click me for fun side-effect!" />
					<CustomButton label="Clickeroo" />
					<CustomButton label="CluckerDoo" />
				</Stack>
			</header>
		</div>
	);
}
export default Dewey;
