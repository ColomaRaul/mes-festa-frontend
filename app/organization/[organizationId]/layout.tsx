'use client';

import React from "react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import { HomeIcon} from "@/components/icons";
import {Divider, Spacer} from "@nextui-org/react";

export default function OrganizationLayout({children, params}: {
    children: React.ReactNode,
    params: {
        organizationId: string
    }
}) {

    return (
        <section className={'grid grid-cols-12'}>
            <div className={'col-span-12'}>{children}</div>
            <div className={'col-span-12 flex items-center justify-center'}>
                <Divider orientation={"horizontal"} className={'my-5'}/>
            </div>
            <div className={'col-span-12 flex items-center justify-center'}>
                <Button
                    startContent={<HomeIcon/>}
                    href={`/organization/${params.organizationId}/home`}
                    as={Link}
                >
                    Tornar al menú
                </Button>
            </div>
        </section>
    )
}