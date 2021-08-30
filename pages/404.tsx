import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage: NextPage = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col space-y-4 text-center mt-36">
			<Image
				src="/illustrations/404.svg"
				height={200}
				width={400}
				alt="Page not found!"
			/>
			<div>
				<div className="text-4xl font-bold dark:text-white">Whoops...</div>
				<div className="text-lg text-gray-600">This page does not exist...</div>
			</div>

			<button
				className="self-center px-5 py-3 text-white transition-all duration-75 bg-purple-600 hover:bg-opacity-80"
				onClick={() => router.back()}
			>
				Return
			</button>
		</div>
	);
};

export default ErrorPage;
