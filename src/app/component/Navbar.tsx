import Link from "next/link"

export default function Navbar(){
    return(
        <div className="flex justify-evenly text-center text-black bg-white h-10">
            <Link href="/home">Home</Link><br />
            <Link href="/about">About</Link><br />
            <Link href="/job">Jobs</Link><br />
            <Link href="/job/programming">Programming</Link><br />
            <Link href="/Contact">Contact</Link>
        </div>
    );
};