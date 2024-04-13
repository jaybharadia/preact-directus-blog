import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/post" class={url == '/post' && 'active'}>
					Post
				</a>
			</nav>
		</header>
	);
}
