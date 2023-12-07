'use client'

import {useEffect, useState} from "react";
import {getAllLoggedUserTransactions} from "@/lib/api/backend-api";
import {useSession} from "next-auth/react";

export default function TransactionsPage({ params }: { params: { organizationId: string } }) {
    const [profitData, setProfitData] = useState([]);
    const [expenseData, setExpenseData] = useState([]);
    const {data: session, status} = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session) {
                    const allTransactions = await getAllLoggedUserTransactions(params.organizationId, session?.user?.access_token);
                    // @ts-ignore
                    setProfitData(allTransactions.filter(item => item.typeTransaction === 'PROFIT'));
                    // @ts-ignore
                    setExpenseData(allTransactions.filter(item => item.typeTransaction === 'EXPENSE'));
                }
            } catch (error) {
                console.error('Error al obtener datos asíncronos:', error);
            }
        };

        fetchData();
    }, [session]);

    return (
        <main>
            <div>
                <h1>Ingresos</h1>
                <div>
                </div>
                <h1>Despeses</h1>
                <div>
                </div>
            </div>
        </main>
    )
}