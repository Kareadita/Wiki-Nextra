import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function AppPreview() {
	const { resolvedTheme, systemTheme } = useTheme();
	const [isThemeResolved, setIsThemeResolved] = useState(false);

	useEffect(() => {
		if (resolvedTheme || systemTheme) {
			setIsThemeResolved(true);
		}
	}, [resolvedTheme, systemTheme]);

	const getRandomImageClass = (theme) => {
		const darkClasses = [
			'bg-dark2', 'bg-dark3', 'bg-dark4', 'bg-dark5',
			'bg-dark6', 'bg-dark7', 'bg-dark8', 'bg-dark9',
		];
		const lightClasses = [
			'bg-light2', 'bg-light3', 'bg-light4', 'bg-light5',
			'bg-light6', 'bg-light7', 'bg-light8', 'bg-light9',
			'bg-light10', 'bg-light11', 'bg-light12', 'bg-light13',
		];

		const classes = theme === 'dark' ? darkClasses : lightClasses;
		return classes[Math.floor(Math.random() * classes.length)];
	};

	const backgroundImageClass = useMemo(() => getRandomImageClass(resolvedTheme), [resolvedTheme]);

	if (!isThemeResolved) {
		return <div className="h-[432px] lg:h-[700px]" />;
	}

	return (
		<div className="relative -mt-7 h-[432px] w-full sm:p-0 lg:h-[700px]">
			<div className="relative h-full">
				<motion.div
					initial={{ opacity: 0, scale: 0.75 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
					className={`z-40 flex h-full flex-1 self-center bg-contain bg-[center_top] bg-no-repeat ${backgroundImageClass} sm:w-auto`}
				/>
			</div>
		</div>
	);
}
