import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';

interface Package {
    id: number;
    packageName: string;
    price: number;
    features: string;
}

interface PageProps {
    packageDetails: Package[];
    [key: string]: unknown;
}

const membership: React.FC = () => {
    const { auth } = usePage<SharedData>().props;
    const { url } = usePage();
    const { packageDetails } = usePage<PageProps>().props;
    console.log(packageDetails);

    return (
        <>
            <Head title="Welcome"></Head>
            <div className="flex flex-col items-center overflow-x-scroll bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
                <header className="text-md fixed top-0 flex min-h-[62px] w-full justify-between border-b-1 bg-[#FDFDFC] px-50 py-6 pt-6 not-has-[nav]:hidden">
                    <nav className="flex items-center justify-around">
                        <Link
                            href={route('home')}
                            className={`text-md inline-block rounded-sm border border-transparent px-5 py-1.5 leading-normal ${url == '/' ? 'font-semibold text-orange-500' : 'text-[#1b1b18] hover:text-orange-400'} dark:text-[#EDEDEC]`}
                        >
                            Home
                        </Link>
                        <Link
                            href={route('register')}
                            className={`text-md inline-block rounded-sm border border-transparent px-5 py-1.5 leading-normal ${url == '' ? 'font-semibold text-orange-500' : 'text-[#1b1b18] hover:text-orange-400'} dark:text-[#EDEDEC]`}
                        >
                            About Us
                        </Link>
                        <Link
                            href={route('register')}
                            className={`text-md inline-block rounded-sm border border-transparent px-5 py-1.5 leading-normal ${url == '' ? 'font-semibold text-orange-500' : 'text-[#1b1b18] hover:text-orange-400'} dark:text-[#EDEDEC]`}
                        >
                            Blog
                        </Link>
                        <Link
                            href={route('register')}
                            className={`text-md inline-block rounded-sm border border-transparent px-5 py-1.5 leading-normal ${url == '/membership' ? 'font-semibold text-orange-500' : 'text-[#1b1b18] hover:text-orange-400'} dark:text-[#EDEDEC]`}
                        >
                            Membership
                        </Link>
                        <Link
                            href={route('register')}
                            className={`text-md inline-block rounded-sm border border-transparent px-5 py-1.5 leading-normal ${url == '' ? 'font-semibold text-orange-500' : 'text-[#1b1b18] hover:text-orange-400'} dark:text-[#EDEDEC]`}
                        >
                            Contact Us
                        </Link>
                    </nav>
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="text-md inline-block rounded-sm border border-[#19140035] px-5 py-1.5 leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="text-md inline-block rounded-sm border border-transparent px-5 py-1.5 leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="text-md inline-block rounded-sm border border-[#19140035] px-5 py-1.5 leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full flex-1 pt-[80px]">
                    <main className="flex w-full flex-1 flex-col p-12 lg:px-32">
                        <div className="flex w-full flex-col items-center justify-center">
                            <h1 className="mb-10 text-5xl font-extrabold">MEMBERSHIP</h1>
                            <div className="grid w-full grid-cols-4 grid-rows-2 gap-6">
                                {packageDetails.map((pkg) => (
                                    <div key={pkg.id} className="flex h-[400px] w-full flex-col rounded border p-4">
                                        <div className="flex w-full h-20 items-center justify-center">logo</div>
                                        <div className='flex justify-center items-center' ><p>Price: ₹{pkg.price}</p></div>
                                        <h2 className="text-lg font-semibold">{pkg.packageName}</h2>
                                        <p>Features: {pkg.features}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
};

export default membership;
