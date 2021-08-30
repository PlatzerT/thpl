import React from 'react';
import DesktopMenu from './desktop/DesktopMenu';
import MobileMenu from './mobile/MobileMenu';

export default function Menu() {
	return (
		<>
			<div className="hidden py-5 md:block">
				<DesktopMenu />
			</div>
			<div className="block py-5 md:hidden">
				<MobileMenu />
			</div>
		</>
	);
}
