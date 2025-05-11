import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


export default function App() {
  const { AddItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-3xl font-black uppercase">Calculadora de propinas y consumo</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
          {menuItems.map(item => (
            <MenuItem
              key={item.id} 
              item = {item}
              addItem={AddItem}
            />
          ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg space-y-10">
        </div>
      </main>
    </>
  )
}


