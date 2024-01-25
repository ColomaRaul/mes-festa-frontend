'use client';

import React, {useEffect, useState} from "react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import { HomeIcon } from "@/components/icons";
import {Divider} from "@nextui-org/react";
import {getDefaultOrganizationByUser} from "@/components/load-organization";
import {useSession} from "next-auth/react";

export default function OrganizationLayout({children, params}: {
    children: React.ReactNode,
    params: {
        organizationId: string
    }
}) {
    const [organizationName, setOrganizationName] = useState('Tornar a la home');
    const {data: session, status} = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session) {
                    const defaultOrganization = await getDefaultOrganizationByUser(session.user.access_token);
                    if (defaultOrganization) {
                        setOrganizationName(defaultOrganization.organization_name);
                    }
                }
            } catch (error) {
                console.error('Error al obtener datos asíncronos:', error);
            }
        };
        fetchData();
    }, [session]);

    return (
        <section className={'grid grid-cols-12'}>
            <div className={'col-span-12 flex items-center justify-center'}>
                <Button
                    startContent={<HomeIcon/>}
                    href={`/organization/${params.organizationId}/home`}
                    as={Link}
                >
                    {organizationName}
                </Button>
            </div>
            <div className={'col-span-12 flex items-center justify-center'}>
                <Divider orientation={"horizontal"} className={'my-5'}/>
            </div>
            <div className={'col-span-12'}>{children}</div>
        </section>
    )
}