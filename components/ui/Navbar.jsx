import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {CiCoffeeCup} from "react-icons/ci";
import {Avatar, AvatarImage, AvatarFallback} from '@radix-ui/react-avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
    const AvatarComp = <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='profile image' className='h-8 rounded-full'/>
        <AvatarFallback>AM</AvatarFallback>
    </Avatar>
    return (
        <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white h-min'>
            <CiCoffeeCup size={'30'}/>
            <div>
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger className='focus:outline-none'>{AvatarComp}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            <Link href='/profile'>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default Navbar
