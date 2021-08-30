import React from 'react';

export default function Layout({ children }: any) {
	return (
		<div className="container w-full h-full px-6 mx-auto md:px-10">
			{children}
		</div>
	);
}
