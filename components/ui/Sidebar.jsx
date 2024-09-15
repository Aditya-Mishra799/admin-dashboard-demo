import React from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from "lucide-react"
import Link from 'next/link'
import PermissionsWrapper from '../PermissionsWrapper'
const Sidebar = () => {
    return (
        <Command className='bg-secondary'>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <PermissionsWrapper requiredPermission={'dashboard.analytics'}>
                    <CommandItem>
                        <LayoutDashboard className='mr-2 h-4 w-4' />
                        <Link href='/'>Dashboard</Link>
                    </CommandItem>
                    </PermissionsWrapper>
                    <CommandItem>
                        <Newspaper className='mr-2 h-4 w-4' />
                        <Link href='/posts'>Posts</Link>
                    </CommandItem>
                    <CommandItem>
                        <Folders className='mr-2 h-4 w-4' />
                        <Link href='#'>Categories</Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className='mr-2 h-4 w-4' />
                        <span>Profile</span>
                        <CommandShortcut>xP</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className='mr-2 h-4 w-4' />
                        <span>Billing</span>
                        <CommandShortcut>xB</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className='mr-2 h-4 w-4' />
                        <span>Settings</span>
                        <CommandShortcut>xS</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>

    )
}

export default Sidebar