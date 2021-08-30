import React from 'react';

interface Props {
	color: string;
	children: string;
}

export default function Badge({ color, children }: Props) {
	return (
		<div className={`badge text-${color}-800 bg-${color}-200`}>{children}</div>
	);
}
