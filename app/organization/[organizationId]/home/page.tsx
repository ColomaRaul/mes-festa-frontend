'use client'
import {Link} from "@nextui-org/link";
import React, {useContext} from "react";
// import OrganizationContext from "@/context/OrganizationContext";
import {Tabs, Tab, Card, CardBody, CardHeader, Button} from "@nextui-org/react";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site";
import {useSession} from "next-auth/react";
import {HomeIcon, iconsOrganization} from "@/components/icons";

export default function OrganizationHomePage({ params }: { params: { organizationId: string } }) {
    // const organizationContext = useContext(OrganizationContext);
    // organizationContext.addOrganizationId(params.organizationId);
    // //TODO make a search to get organization data information
    // organizationContext.addOrganizationName('Kabilenyos');
    const {data: session, status} = useSession();
    const pathname = usePathname();

    if (session?.user) {
        return (
            <div className={'grid grid-cols-2 gap-4'}>
                {siteConfig.organizationNavItems.map((item) => {
                    let replacedUrl = item.path.replace('organizationId', params.organizationId);
                    return (
                        <Button
                            key={replacedUrl}
                            startContent={iconsOrganization[item.id]}
                            href={replacedUrl}
                            as={Link}
                            radius={'full'}
                            className={'px-unit-6 min-w-unit-24 h-unit-48 text-4xl gap-unit-3 rounded-large'}
                        >
                            {item.title}
                        </Button>
                        )
                    })}
            </div>
        )
    }
}
