import Link from "next/link";

interface FooterItemProps {
	title: string;
}

export default function FooterItem(props: FooterItemProps) {
	const { title } = props;

	return (
		<li className="mb-6">
			<Link href="/">
				<a className="text-lg color-palette-1 text-decoration-none">{title}</a>
			</Link>
		</li>
	);
}
