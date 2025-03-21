import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
	return (
		<div className="relative">
			<div className="text-center">
				<motion.h1
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl"
				>
					<span className="block xl:inline">Ready to kick-start your </span>{' '}
					<span className="block xl:inline">next reading binge?</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25, duration: 0.5 }}
					className="text-neutral-650 mx-auto mt-3 max-w-md text-base dark:text-neutral-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
				>
					Lightning fast with a slick design, Kavita is a rocket fueled self-hosted digital library which supports a vast array of file formats. Install to start reading and share your server with your friends. 
				</motion.p>

				<div className="mx-auto mt-5 flex max-w-lg justify-center space-x-2 md:mt-8">
					<motion.div
						className="flex"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.1, duration: 0.4 }}
					>
						<Link
							className="bg-neutral-650 dark:hover:bg-neutral-650 hover:border-neutral-450 active:border-neutral-450 dark:active:border-neutral-450 dark:hover:border-neutral-450 dark:active:bg-neutral-650 flex cursor-pointer items-center rounded-md border border-neutral-500 px-3 py-1.5 text-sm font-medium text-neutral-800 transition-all duration-300 hover:bg-neutral-600 hover:text-white focus:outline-none active:bg-neutral-50 active:text-white dark:border-neutral-500 dark:bg-neutral-700 dark:bg-opacity-90 dark:text-neutral-200 dark:shadow-sm dark:hover:bg-neutral-700 dark:hover:bg-opacity-100 dark:hover:text-white dark:active:text-white dark:active:opacity-90"
							href="getting-started"
						>
							<span>Read Documentation</span>
						</Link>
					</motion.div>

					<motion.div
						className="flex"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.3, duration: 0.5 }}
					>
						<Link
							className="dark:active:border-neutral-650 dark:active:bg-neutral-650 flex cursor-pointer items-center space-x-2 rounded-md border border-transparent bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-50 hover:text-neutral-900 focus:outline-none active:border-neutral-200 active:bg-neutral-50 active:text-neutral-600 dark:bg-opacity-90 dark:text-neutral-200 dark:shadow-sm dark:hover:border-neutral-500 dark:hover:bg-neutral-700 dark:hover:bg-opacity-100 dark:hover:text-white dark:active:text-white dark:active:opacity-90"
							href="https://demo.kavitareader.com/login?apiKey=9003cf99-9213-4206-a787-af2fe4cc5f1f"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLaptop} />

							<span>View Demo</span>
						</Link>
					</motion.div>

					<motion.div
						className="flex"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.3, duration: 0.5 }}
					>
						<Link
							className="dark:active:border-neutral-650 dark:active:bg-neutral-650 flex cursor-pointer items-center space-x-2 rounded-md border border-transparent bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-50 hover:text-neutral-900 focus:outline-none active:border-neutral-200 active:bg-neutral-50 active:text-neutral-600 dark:bg-opacity-90 dark:text-neutral-200 dark:shadow-sm dark:hover:border-neutral-500 dark:hover:bg-neutral-700 dark:hover:bg-opacity-100 dark:hover:text-white dark:active:text-white dark:active:opacity-90"
							href="https://github.com/Kareadita/Kavita"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} />

							<span>See on Github</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
