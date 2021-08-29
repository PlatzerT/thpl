import React from 'react';
import DesktopMenu from './desktop/DesktopMenu';
import MobileMenu from './mobile/MobileMenu';

export default function Menu() {
	return (
		<>
			<div className="hidden md:block">
				<DesktopMenu />
			</div>
			<div className="block md:hidden">
				<MobileMenu />
			</div>
		</>
	);
}
