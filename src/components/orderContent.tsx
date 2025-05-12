import { formatCurrency } from "../helpers"
import type { MenuItems, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItems['id']) => void
}

export default function OrderContent({order, removeItem} : OrderContentProps) {
    return (
    <div>
        <h2 className='font-black text-4xl text-center mt-3'>Consumo</h2>
        <div className="space-y-3 nt-5 mt-10">
            {order.length === 0 ? 
            <p className="text-center">La orden esta vacía</p>
            : (
                order.map(item => (
                    <div
                    className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
                    key={item.id}>
                        <div className="ml-6">
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantitdad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button
                        className="bg-red-600 h-8 w-8 rounded-full text-white mr-5"
                        onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
    )
}
