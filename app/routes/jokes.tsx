import { Outlet } from "remix"
export default function JokesRoute() {
	return (
		<>
			<h1>Get your daily J🤪KE!</h1>
			<main>
				<Outlet />
			</main>
		</>
	);
}