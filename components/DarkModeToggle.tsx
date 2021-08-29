import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HalfMoon, SunLight } from 'iconoir-react';

const iconSize = 20;

export default function DarkModeToggle({ additionalClasses }: any) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const isDarkTheme = theme && theme === 'dark';

	useEffect(() => setMounted(true), []);

	// If the page is mounted --> render UI
	if (!mounted) {
		return null;
	}

	return (
		<button
			className={`p-2.5 hover:bg-gray-200 transition-all dark:hover:bg-gray-600 bg-gray-100 rounded-lg dark:bg-gray-700 ${additionalClasses}`}
			onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
		>
			{isDarkTheme ? (
				<HalfMoon color="#D1D5DB" height={iconSize} width={iconSize} />
			) : (
				<SunLight color="#374151" height={iconSize} width={iconSize} />
			)}
		</button>
	);
}
