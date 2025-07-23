import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const { url } = usePage();

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
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
                            href={route('membership')}
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
                        <div className="mb-14 flex max-h-[140px] w-full flex-1 items-end gap-6 rounded-lg border px-6 pt-7 pb-8 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                            {/* Location */}
                            <div className="flex w-[40%] flex-col">
                                <label className="mb-1 text-sm" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    id="location"
                                    className="h-[50px] w-full rounded-lg border px-3 capitalize outline-0"
                                    type="text"
                                    placeholder="Enter Your Location"
                                />
                            </div>

                            {/* Category */}
                            <div className="flex w-[40%] flex-col">
                                <label className="mb-1 text-sm" htmlFor="category">
                                    Category
                                </label>
                                <select id="category" className="h-[50px] w-full rounded-lg border px-3 capitalize outline-0">
                                    <option value="">All Categories</option>
                                </select>
                            </div>

                            {/* Search Button */}
                            <div className="w-[20%]">
                                <button className="text-md h-[50px] w-full rounded-lg bg-blue-500 px-3 text-white capitalize outline-0">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="mb-18 flex flex-col gap-6">
                            <h1 className="text-3xl font-bold">Top Listings in Your Area</h1>
                            <div className="grid grid-cols-2 gap-4 px-4">
                                <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                    <div className="rounded-t-lg">
                                        <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                        <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                            <span className="px-2 text-xl font-extrabold">Hospital</span>
                                            <span className="px-2 text-sm">
                                                <span>icon</span>
                                                Hospital
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                    <div className="rounded-t-lg">
                                        <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                        <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                            <span className="px-2 text-xl font-extrabold">Hospital</span>
                                            <span className="px-2 text-sm">
                                                <span>icon</span>
                                                Hospital
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                    <div className="rounded-t-lg">
                                        <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                        <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                            <span className="px-2 text-xl font-extrabold">Hospital</span>
                                            <span className="px-2 text-sm">
                                                <span>icon</span>
                                                Hospital
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                    <div className="rounded-t-lg">
                                        <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                        <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                            <span className="px-2 text-xl font-extrabold">Hospital</span>
                                            <span className="px-2 text-sm">
                                                <span>icon</span>
                                                Hospital
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                    <div className="rounded-t-lg">
                                        <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                        <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                            <span className="px-2 text-xl font-extrabold">Hospital</span>
                                            <span className="px-2 text-sm">
                                                <span>icon</span>
                                                Hospital
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                    <div className="rounded-t-lg">
                                        <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                        <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                            <span className="px-2 text-xl font-extrabold">Hospital</span>
                                            <span className="px-2 text-sm">
                                                <span>icon</span>
                                                Hospital
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center gap-8 rounded-lg p-6 shadow-[0_0_1px_0_rgba(0,0,0,0.1)]">
                            <h1 className="text-3xl font-bold">Explore Categories</h1>

                            <div className="mb-24 grid w-full grid-cols-5 gap-8 space-x-4">
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                                <div className="h-[220px] w-[167px] rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                                    <div className="flex h-[50%] flex-col items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex h-[50%] justify-center py-4">
                                        <span>bottom</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-18 flex flex-col items-center justify-center gap-6">
                                <h1 className="text-3xl font-bold">Latest Listings</h1>
                                <p className="mb-6">Discover our newest listings: expert services and unparalleled expertise await </p>
                                <div className="grid grid-cols-3 gap-4 px-4">
                                    <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                        <div className="rounded-t-lg">
                                            <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                            <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                                <span className="px-2 text-xl font-extrabold">Hospital</span>
                                                <span className="px-2 text-sm">
                                                    <span>icon</span>
                                                    Hospital
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                        <div className="rounded-t-lg">
                                            <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                            <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                                <span className="px-2 text-xl font-extrabold">Hospital</span>
                                                <span className="px-2 text-sm">
                                                    <span>icon</span>
                                                    Hospital
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                        <div className="rounded-t-lg">
                                            <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                            <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                                <span className="px-2 text-xl font-extrabold">Hospital</span>
                                                <span className="px-2 text-sm">
                                                    <span>icon</span>
                                                    Hospital
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                        <div className="rounded-t-lg">
                                            <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                            <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                                <span className="px-2 text-xl font-extrabold">Hospital</span>
                                                <span className="px-2 text-sm">
                                                    <span>icon</span>
                                                    Hospital
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.1)]">
                                        <div className="rounded-t-lg">
                                            <img className="rounded-t-lg" src="/images/hospital.jpg" alt="" />
                                            <div className="flex h-24 w-full flex-col gap-2 rounded-b-xl bg-white p-4">
                                                <span className="px-2 text-xl font-extrabold">Hospital</span>
                                                <span className="px-2 text-sm">
                                                    <span>icon</span>
                                                    Hospital
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
