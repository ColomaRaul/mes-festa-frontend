'use client'
import { getHealth } from "@/components/health";
import { useEffect, useState } from "react";
import { HealthData } from '@/lib/api/api-types';


export default function Health() {
    const [healthData, setHealthData] = useState<HealthData|null>({ message: 'loading'});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const health = await getHealth();
                setHealthData(health);
            } catch (error) {
                console.log('error! help!')
                setHealthData({ message: 'error! help!'});
            }
        };

        fetchData();
    }, []);
    return (
        <>
        <p>Test connection</p>
        <p>{healthData?.message}</p>
        </>
    )
}