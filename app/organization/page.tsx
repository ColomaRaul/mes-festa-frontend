'use client'

import {getAllLoggedUserOrganization} from "@/lib/api/backend-api";
import {useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {siteConfig} from "@/config/site";

export default function OrganizationPage() {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session) {
                    const allLoggedUserOrganization = await getAllLoggedUserOrganization(session?.user?.access_token);
                    if (allLoggedUserOrganization.length > 0) {
                        router.push(`/organization/${allLoggedUserOrganization[0].organization_id}/home`)
                    }
                }
            } catch (error) {
                console.log('error! help!')
            }
        };

        fetchData();
    }, [session]);


    if (status === 'loading' || !session) {
        return (
            <div>
                <h1>Cargant organitzacions</h1>
            </div>
        )
    }
}