import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/about" class={url == '/about' && 'active'}>
					About
				</a>
				<a href="/blog" class={url == '/blog' && 'active'}>
					Blogs
				</a>
			</nav>
		</header>
	);
}
