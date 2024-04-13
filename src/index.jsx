import {render} from 'preact';
import { LocationProvider, Router, Route} from 'preact-iso';

import { NotFound } from './pages/_404.jsx';
import {PostList} from "./pages/post/list.jsx";
import {Post} from "./pages/post/slug.jsx";
import {Home} from "./pages/index.jsx";

import { Header } from './components/Header.jsx';
import "./style.css"
export function App() {
	return (

		<LocationProvider>
			<Header/>
			<main>
				<Router>
				<Route path="/" component={Home} />
					<Route path="/post" component={PostList} />
					<Route path="/post/:slug" component={Post} />
					<Route default component={NotFound} />

				</Router>
			</main>
		</LocationProvider>
	);
}
render(<App />, document.getElementById('app'));
