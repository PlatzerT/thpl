import React from 'react';
import Link from 'next/link';

interface Props {
	label: string;
	route: string;
	cssClasses?: string;
}

export default function MenuItem({ label, route, cssClasses }: Props) {
	return (
		<Link href={route}>
			<a
				className={`text-gray-500 transition-all hover:text-gray-900 dark:hover:text-white ${cssClasses}`}
			>
				{label}
			</a>
		</Link>
	);
}
