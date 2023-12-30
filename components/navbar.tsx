'use client';

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import {useSession, signOut, signIn} from "next-auth/react";

export const Navbar = () => {
	const session = useSession();

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">Mes Festa</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
				{session !== null
					? <NavbarItem className="hidden lg:flex">{session.data?.user.name}</NavbarItem>
					: <NavbarItem className="hidden lg:flex"></NavbarItem>
				}
				<NavbarItem className="hidden md:flex">
					{session.data !== null
						? <Button onClick={() => signOut()} color={'danger'}>Log out</Button>
						: <Button onClick={() => signIn()} color={'primary'}>Log in</Button>
					}
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				{session !== null
					? <NavbarItem className="lg:flex">{session.data?.user.name}</NavbarItem>
					: <NavbarItem className="lg:flex"></NavbarItem>
				}
				<NavbarItem className="md:flex">
					{session.data !== null
						? <Button onClick={() => signOut()} color={'danger'}>Log out</Button>
						: <Button onClick={() => signIn()} color={'primary'}>Log in</Button>
					}
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};
