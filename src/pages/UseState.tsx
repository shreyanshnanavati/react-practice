import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
type Transaction = {
  title: string;
  category: string;
  expense: string;
}

export default function UseState() {
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([])
  return (
    <div>
      <div className="h-screen flex ">
        <div className="flex-1  pt-4">
          <div className="h-screen flex flex-col gap-4 p-4  ">
            <ExpenseForm setRecentTransactions = {setRecentTransactions} />
          </div>
        </div>
        <div className="flex-1 bg-teal-600">
          <div className="h-screen flex flex-col">
            <div className="flex-1 p-4  bg-teal-800">
              <h2 className="text-2xl"> Summary </h2>
              <div className="mt-5"> Total Spent </div>
            </div>
            <div className="flex-2 p-4  bg-teal-500">
              <h2 className="text-2xl"> Recent Transactions</h2>
              { recentTransactions.length !== 0 ? 
                recentTransactions.map(({title,category,expense}) =>{
                  return (<div>{title} {category} {expense}</div>)
                }) : <h2> No Recent Transactions </h2>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
