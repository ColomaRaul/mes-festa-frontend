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
import NextLink from "next/link";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
	User,
	AvatarIcon,
	DropdownSection
} from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import {Logo} from "@/components/icons";
import {useSession, signOut, signIn} from "next-auth/react";
import {useEffect, useState} from "react";
import {getDefaultOrganizationByUser} from "@/components/load-organization";
import {Link} from "@nextui-org/link";

export const MainHeader = () => {
	const session = useSession();
	const [organizationName, setOrganizationName] = useState<string|null>(null);
	const [organizationId, setOrganizationId] = useState<string|null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (session !== null) {
					// @ts-ignore
					const defaultOrganization = await getDefaultOrganizationByUser(session.data.user.access_token);
					if (defaultOrganization) {
						setOrganizationName(defaultOrganization.organization_name);
						setOrganizationId(defaultOrganization.organization_id);
					}
				}
			} catch (error) {
				console.error('Error al obtener datos asíncronos:', error);
			}
		};
		fetchData();
	}, [session]);

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
				<NavbarItem className="hidden lg:flex">
					<Dropdown placement="bottom-end">
						<DropdownTrigger>
							<Avatar
								isBordered
								as="button"
								className="transition-transform"
								icon={<AvatarIcon />}
							/>
						</DropdownTrigger>
						<DropdownMenu aria-label="Profile Actions" variant="flat">
							<DropdownSection aria-label={'Profile paths'} showDivider>
								<DropdownItem key="profile" className="h-14 gap-2">
									{session.data !== null
										? <div>
											<p className="font-semibold">Logat com a</p>
											<p className="font-semibold">{session.data?.user?.name}</p>
										</div>
										: <p className="font-semibold">Log in</p>
									}
								</DropdownItem>
								<DropdownItem key="admin">
									{
										session.data !== null && session.data?.user?.roles?.includes('admin', 'super-admin')
											? <Link href={'/admin'} color={'foreground'}>Admin</Link>
											: <p>Not admin</p>
									}
								</DropdownItem>
								<DropdownItem key="organization">
									{organizationId !== null
									? <Link href={`/organization/${organizationId}/home`} color={'foreground'}>{organizationName}</Link>
									: <p>Without organization</p>}
								</DropdownItem>
								<DropdownItem key="analytics">
									Analytics
								</DropdownItem>
								<DropdownItem key="system">System</DropdownItem>
								<DropdownItem key="configurations">Configurations</DropdownItem>
								<DropdownItem key="help_and_feedback">
									Help & Feedback
								</DropdownItem>
							</DropdownSection>
							<DropdownSection aria-label={'Sign in out'}>
								<DropdownItem key="logout" color="danger">
									{session.data !== null
										? <Link onClick={() => signOut()} color={'danger'}>Log out</Link>
										: <Link onClick={() => signIn()} color={'primary'}>Log in</Link>
									}
								</DropdownItem>
							</DropdownSection>
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				{session.data !== null
					? <NavbarItem className="lg:flex">
						<User
							name={session.data?.user?.name}
						/>
					</NavbarItem>
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
