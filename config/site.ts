import { HomeIcon} from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Mes Festa App",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
	organizationNavItems: [
		{
			id: 'home',
			title: 'Home',
			path: `/organization/organizationId/home`
		},
		{
			id: 'personal_page',
			title: 'Pàgina personal',
			path: `/organization/organizationId/personal-page`
		},
		{
			id: 'notifications',
			title: 'Notificacions',
			path: `/organization/organizationId/notifications`
		},
		{
			id: 'transactions',
			title: 'Compters',
			path: `/organization/organizationId/transactions`
		},
		{
			id: 'documentation',
			title: 'Documents',
			path: `/organization/organizationId/documentation`
		},
		{
			id: 'assistance',
			title: 'Assistència',
			path: `/organization/organizationId/assistance`
		},
		{
			id: 'calendar',
			title: 'Calendari',
			path: `/organization/organizationId/calendar`
		}
	]
};
