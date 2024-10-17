import Link from "next/link"

export default function Navbar(){
    return(
        <div className="flex justify-evenly text-center text-white bg-black h-10">
            <Link href="/home">Home</Link><br />
            <Link href="/about">About</Link><br />
            <Link href="/skills">Skills</Link><br />
            <Link href="/Contact">Contact</Link>
        </div>
    );
};