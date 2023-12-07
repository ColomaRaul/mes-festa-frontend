'use client';

import React from "react";
import {Tab, Tabs} from "@nextui-org/react";
import {usePathname} from "next/navigation";

export default function OrganizationLayout({children, params}: {
    children: React.ReactNode,
    params: {
        organizationId: string
    }
}) {
    const pathname = usePathname();
    return (
        <div>
            <Tabs aria-label="Options" selectedKey={pathname}>
                <Tab key={`/organization/${params.organizationId}/home`} title="Home" href={`/organization/${params.organizationId}/home`}/>
                <Tab key={`/organization/${params.organizationId}/personal-page`} title="Personal Page" href={`/organization/${params.organizationId}/personal-page`}/>
                <Tab key={`/organization/${params.organizationId}/notifications`} title="Notifications" href={`/organization/${params.organizationId}/notifications`}/>
                <Tab key={`/organization/${params.organizationId}/transactions`} title="Transactions" href={`/organization/${params.organizationId}/transactions`}/>
                <Tab key={`/organization/${params.organizationId}/documentation`} title="Documentation" href={`/organization/${params.organizationId}/documentation`}/>
                <Tab key={`/organization/${params.organizationId}/assistance`} title="Assistance" href={`/organization/${params.organizationId}/assistance`}/>
                <Tab key={`/organization/${params.organizationId}/calendar`} title="Calendar" href={`/organization/${params.organizationId}/calendar`}/>
            </Tabs>
            {children}
        </div>
    )
}