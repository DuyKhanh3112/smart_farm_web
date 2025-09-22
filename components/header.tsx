/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [profileOpen, setProfileOpen] = useState(false);
    const pathname = usePathname();

    const menus = [
        { name: "Trang chủ", href: "/" },
        { name: "Dữ liệu", href: "/page/data" },
        { name: "Chuẩn đoán bệnh", href: "/page/picture" },
        { name: "Tin tức", href: "/page/news" },
        { name: "Hỏi AI", href: "/page/ai" },
    ];

    const classActive = "rounded-md bg-green-200 px-3 py-2 text-sm font-medium text-green-900";
    const classInactive = "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-green-100/50 hover:text-white";

    return (
        <nav className="relative bg-white-800 bg-[url('/image/bg_nav.png')] bg-cover bg-center shadow">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-24 items-center justify-between">
                    <div className="flex flex-1 items-center space-x-6">
                        <div className="flex items-center">
                            <Link href="/" key='home'>
                                <img
                                    className="h-16 w-auto"
                                    src="/image/logo.png"
                                    alt="Smart Farm Logo"
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                {menus.map((m) => (
                                    <Link
                                        key={m.name}
                                        href={m.href}
                                        className={pathname === m.href ? classActive : classInactive}
                                    >
                                        <h1 className="font-bold"> {m.name}</h1>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side (notifications + profile) */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Notification button */}
                        <button className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M14.857 17.082a23.848 23.848 0 01-5.714 0M18 9.75V9a6 6 0 00-12 0v.75a8.967 8.967 0 01-2.312 6.022A23.85 23.85 0 0012 18c2.5 0 4.867-.46 7.142-1.228A8.967 8.967 0 0118 9.75z"
                                />
                            </svg>
                        </button>

                        {/* Profile dropdown */}
                        <div className="relative ml-3">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex rounded-full focus:outline-none"
                            >
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                                    alt="User"
                                />
                            </button>
                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Your profile
                                    </Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Settings
                                    </Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Sign out
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </nav >
    );
}
