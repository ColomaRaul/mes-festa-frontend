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
			title: 'Home',
			path: `/organization/organizationId/home`
		},
		{
			title: 'Pàgina personal',
			path: `/organization/organizationId/personal-page`
		},
		{
			title: 'Notificacions',
			path: `/organization/organizationId/notifications`
		},
		{
			title: 'Compters',
			path: `/organization/organizationId/transactions`
		},
		{
			title: 'Documents',
			path: `/organization/organizationId/documentation`
		},
		{
			title: 'Assistència',
			path: `/organization/organizationId/assistance`
		},
		{
			title: 'Calendari',
			path: `/organization/organizationId/calendar`
		}
	]
};
