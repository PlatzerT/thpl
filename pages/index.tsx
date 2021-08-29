import type { NextPage } from 'next';
import Head from 'next/head';
import Menu from '../components/menu/Menu';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Portfolio | Thomas Platzer</title>
			</Head>
			<Menu />
		</>
	);
};

export default Home;
