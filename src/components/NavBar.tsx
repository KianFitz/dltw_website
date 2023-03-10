import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavBar : React.FC = () => {
    const [active, setActive] = useState(false);
    const { data: sessionData } = useSession();
    const handleClick = () => {
        setActive(!active);
    }

    return (
    <>
        <nav className="flex items-center flex-wrap bg-orange-400 p-3">
            <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            <div className={`${
                active ? '' : 'hidden'
            } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                    <Link href='/'>
                        <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600">
                            Home
                        </span>
                    </Link>
                    <Link href='/fixtures'>
                        <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600">
                            Fixtures
                        </span>
                    </Link>
                    <Link href='/teams'>
                        <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600">
                            Teams
                        </span>
                    </Link>
                    <Link href='/about'>
                        <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600">
                            About
                        </span>
                    </Link>
                </div>
                <button className="lg:inline-flex lg:w-auto lg:ml-auto hover:bg-orange-600"
                    onClick={sessionData ? () => void signOut() : () => void signIn()}>
                    <Image className="rounded-3xl" width="50" height="50" alt="Profile avatar" src={sessionData ? sessionData.user?.image as string : "/default-avatar.jpg"}/>
                    <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font bold items-center justify-center">{sessionData ? sessionData.user?.name : "Sign in"}</span>
                </button>
            </div>
        </nav>
    </>
    )
}


export default NavBar;