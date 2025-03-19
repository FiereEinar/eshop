import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Categories from './pages/Categories';

export default function Route() {
	const route = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/category',
					element: <Categories />,
				},
			],
		},
		{
			path: '/signup',
			element: <Signup />,
		},
		{
			path: '/login',
			element: <Login />,
		},
	]);

	return <RouterProvider router={route} />;
}
