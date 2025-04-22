import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Link from 'next/link';

export default function Header() {

    return (
        <header className="shadow-md bg-[#98C1D9] ">
            <div className="flex justify-between items-center container md:gap-[60px] gap-[25px] p-3 mx-auto">
                <h1 className="text-[16px] sm:text-[24px]  ">
                    <Link href={"/"} className='flex items-center gap-[5px'>
                        <HomeIcon />
                        <div>Estate</div>
                    </Link>

                </h1>
                <form action="" className="flex gap-[10px] flex-1">
                    <input type="text" placeholder="Search..." className='bg-[#BBC7CE] rounded-[50px] px-[10px] py-[3px] flex-1' />
                    <button type="submit" className="border-white border-2 rounded-[10px] p-1">Search</button>
                </form>
                <ul className="flex justify-center items-center gap-[30px] text-[20px]">
                    <li className='hidden sm:inline'>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className='hidden sm:inline'>
                        <Link href={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={"/login"}>
                            Sign In
                        </Link>
                    </li>


                </ul>
            </div>


        </header>
    );
}
