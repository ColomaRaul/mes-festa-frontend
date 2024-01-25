'use client'

import React, {useEffect, useState} from "react";
import {getAllLoggedUserTransactions} from "@/lib/api/backend-api";
import {useSession} from "next-auth/react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    Spacer
} from "@nextui-org/react";


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

    const renderRow = React.useCallback((transaction: any, columnKey: React.Key) => {
        const cellValue = transaction[columnKey as keyof any];

        switch (columnKey) {
            case 'date':
                let formattedStringDate = new Date(cellValue as string);
                let options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
                let formattedDate = new Intl.DateTimeFormat('es-ES', options).format(formattedStringDate);

                return <div>{formattedDate}</div>;
            case 'amount':
                // @ts-ignore
                let amount = cellValue / 100;
                // @ts-ignore
                let formattedAmount: string = amount as string;

                // @ts-ignore
                return formattedAmount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
            default:
                return cellValue;
        }
    }, [])

    const topContentProfit = () => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Chip>Ingressos</Chip>
                </div>
            </div>
        )
    }

    const topContentExpense = () => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Chip>Despesses</Chip>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <Table aria-label={'Ingressos'}
                       topContent={topContentProfit()}
                >
                    <TableHeader>
                        <TableColumn key={'date'} width={15}>Data</TableColumn>
                        <TableColumn key={'typeFinancial'} width={300}>Concepte</TableColumn>
                        <TableColumn key={'amount'} width={30}>Quantitat</TableColumn>
                    </TableHeader>
                    <TableBody items={profitData} emptyContent={'Not transactions found'}>
                        {(item: any) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderRow(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <Spacer y={5}/>
            <div>
                <Table aria-label={'Despeses'}
                       topContent={topContentExpense()}
                >
                    <TableHeader>
                        <TableColumn key={'date'} width={15}>Data</TableColumn>
                        <TableColumn key={'typeFinancial'} width={300}>Concepte</TableColumn>
                        <TableColumn key={'amount'} width={30}>Quantitat</TableColumn>
                    </TableHeader>
                    <TableBody items={expenseData} emptyContent={'Not transactions found'}>
                        {(item: any) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderRow(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}