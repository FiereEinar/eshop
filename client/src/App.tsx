import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';

function App() {
	return (
		<main>
			<Topbar />
			<Outlet />
		</main>
	);
}

export default App;
