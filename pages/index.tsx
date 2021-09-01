import { ArrowRight, FastArrowDown } from 'iconoir-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Menu from 'components/menu/Menu';
import { useTheme } from 'next-themes';

const Home: NextPage = () => {
	const { theme } = useTheme();
	return (
		<>
			<Head>
				<title>Portfolio | Thomas Platzer</title>
			</Head>
			<section className="flex flex-col h-screen">
				<Menu />
				<article className="relative z-0 flex items-center flex-1">
					<div>
						<div className="text-5xl font-extrabold font-raleway dark:text-white">
							Thomas Platzer.
						</div>
						<div className="mt-2 font-sans text-gray-500">
							<div>
								Dedicated{' '}
								<span className="text-black dark:text-gray-200">
									Software Developer.
								</span>
							</div>
							<div className="mt-5">
								<Link href="/projects">
									<a className="cta">Projects</a>
								</Link>
							</div>
						</div>
					</div>

					<div className="absolute inset-x-0 z-0 flex justify-center text-xl italic text-center text-gray-400 animate-bounce bottom-5">
						<FastArrowDown color="black" height={30} width={30} />
						{/*<div className="font-sans text-sm italic">
							"Software Development is not a job.
							<br />
							It is passion."
						</div>*/}
					</div>
				</article>
			</section>
			<section className="py-28">
				<div className="flex flex-col justify-between space-y-5 md:space-y-0 md:items-center md:space-x-12 md:flex-row">
					<div className="flex shadow-lg dark:backdrop-brightness-90">
						<Image
							src="/images/zweigstelle.png"
							height={360}
							width={600}
							alt="Zweigstelle"
						/>
					</div>

					<div className="flex flex-col space-y-4">
						<div>
							<div className="text-3xl font-extrabold dark:text-white font-raleway">
								E-Commerce Web Application
							</div>
							<div className="text-gray-400">Zweigstelle Schwaigau</div>
						</div>
						<div className="flex space-x-2">
							<div className="text-blue-800 bg-blue-200 badge">NextJS</div>
							<div className="text-purple-800 bg-purple-200 badge">
								Strapi CMS
							</div>
							<div className="text-green-800 bg-green-200 badge">Stripe</div>
						</div>
						<div className="self-start">
							<Link href="/projects">
								<a className="flex items-center justify-start space-x-3 cta">
									<div>More projects</div>
									<ArrowRight
										color="white"
										height={20}
										width={20}
										strokeWidth={2.0}
									/>
								</a>
							</Link>
						</div>

						{/*<div>
							This is a remake of the "Zweigstelle Schwaigau" website as their
							current website does not look very modern. I took all the data
							from their website and re-designed it entirely and added a fully
							functional{' '}
							<span className="font-bold underline">online shop</span>.
							<br />
							Key features:
							<ul className="list-disc list-inside">
								<li>Full user authentication using JWT</li>
								<li>Product payments</li>
								<li>Order management for the employees</li>
							</ul>
						</div>*/}
					</div>
				</div>
			</section>
			<section className="h-screen">
				<div className="flex items-center justify-between md:space-x-10">
					<div className="flex-grow h-[1px] bg-black hidden md:flex dark:bg-white"></div>
					<div className="text-4xl text-black md:text-center md:flex-shrink-0 dark:text-white">
						Education & Experience
					</div>
					<div className="flex-1 h-[1px] bg-black hidden md:flex dark:bg-white"></div>
				</div>
				<div className="grid mt-20 lg:grid-cols-3 md:grid-cols-2 gap-y-16">
					<div className="space-y-4">
						<div className="font-semibold text-gray-400 font-raleway">
							SCHOOL
						</div>
						<div>
							<div className="font-bold">Elementary School Pettenbach</div>
							<div className="text-sm">2010-2014</div>
						</div>
						<div>
							<div className="font-bold">High School Pettenbach</div>
							<div className="text-sm">2014-2018</div>
						</div>
						<div>
							<div className="font-bold">Higher Technical College Wels</div>
							<div className="-mt-1">Information Technology</div>
							<div className="text-sm">2018-</div>
						</div>
					</div>
					<div className="space-y-4">
						<div className="font-semibold text-gray-400 font-raleway">
							INTERNSHIPS
						</div>
						<div>
							<div className="font-bold">Kontron Technologies GmbH in Linz</div>
							<div className="-mt-1">Angular</div>
							<div className="text-sm">2020</div>
						</div>
						<div>
							<div className="font-bold">Zentro GmbH in Scharnstein</div>
							<div className="-mt-1"> Angular, Spring Boot</div>
							<div className="text-sm">2021</div>
						</div>
					</div>
					<div className="space-y-4">
						<div className="font-semibold text-gray-400 font-raleway">
							SIDE HUSTLES
						</div>
						<div>
							<div className="font-bold">Zentro GmbH in Scharnstein</div>
							<div className="-mt-1">UI/UX Designer, Angular</div>
							<div className="text-sm">2021-</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
