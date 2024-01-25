'use client'

import {useSession} from "next-auth/react";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {getDefaultOrganizationByUser} from "@/components/load-organization";

export default function OrganizationPage() {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session) {
                    const defaultOrganization = await getDefaultOrganizationByUser(session.user.access_token);
                    if (defaultOrganization) {
                        router.push(`/organization/${defaultOrganization.organization_id}/home`)
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