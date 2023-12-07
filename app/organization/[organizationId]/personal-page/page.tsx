'use client'

import {Tab, Tabs} from "@nextui-org/react";
import {usePathname} from "next/navigation";


export default function PersonalPage({ params }: { params: { organizationId: string } }) {
    const pathname = usePathname();

    return (
        <section>
            <h1>Hola personal page</h1>
        </section>
    )
}