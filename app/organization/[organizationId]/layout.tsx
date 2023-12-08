'use client';

import React from "react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {DiscordIcon, UserIcon} from "@/components/icons";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site";
import {Spacer} from "@nextui-org/react";

export default function OrganizationLayout({children, params}: {
    children: React.ReactNode,
    params: {
        organizationId: string
    }
}) {
    const pathname = usePathname();

    return (
        <section className={'grid grid-cols-12'}>
            <div className={'col-span-2'}>
                <ul>
                    {siteConfig.organizationNavItems.map((item) => {
                        let replacedUrl = item.path.replace('organizationId', params.organizationId);
                        return (
                            <li key={item.path}>
                                <Link href={replacedUrl} className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
                                    replacedUrl === pathname ? 'bg-zinc-100' : ''}`}>
                                    <span className={'font-semibold text-xl flex'}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'col-span-1'}></div>
            <div className={'col-span-9'}>{children}</div>
        </section>
    )
}