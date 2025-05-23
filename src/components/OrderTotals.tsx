import { useCallback} from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder : () => void

}
export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {
    const subTotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useCallback(() => subTotalAmount() * tip, [tip,order])
    const totalAmout = useCallback(() => subTotalAmount() + tipAmount(),[tip,order])
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl text-center">Totales y Propina: </h2>
                <p className="ml-6">
                    Subtotal a pagar: {''}
                    <span className="font-bold ">{formatCurrency(subTotalAmount())}</span>
                </p>
                <p className="ml-6">
                    Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>
                <p className="ml-6">
                    Total a Pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmout())}</span>
                </p>

            </div>
            <button
            className="w-full bg-black p-3 uppercase text-white mt-10 disabled:opacity-10"
            disabled={totalAmout() === 0}
            onClick={() => placeOrder()}
            >
                Guardar Orden
            </button>
        </>
    )
}
