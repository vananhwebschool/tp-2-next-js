'use client'
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';


const links = [
    {name: 'Games', href: '/games'},
    {name: 'Tic Tac Toe', href: '/games/ticTacToe'},
    {name: 'Hangman', href: '/games/hangman'},
    {name: 'Your Scores', href: '/games/scores'},
];

export default function NavLinks() {
    const pathName = usePathname();
    return (
        <>
            {links.map((link) => (
                <li key={link.name}
                className={clsx({'bg-base-300: path': pathName === link.href})}>
                    <Link href={link.href}>{link.name}</Link>
                </li>
            ))}
        </>
    )
}