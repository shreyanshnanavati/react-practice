import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

// 1. Define the shape of a Transaction
type Transaction = {
  title: string;
  category: string;
  expense: number;
};

// 2. Type the props
type Props = {
  setRecentTransactions: Dispatch<SetStateAction<Transaction[]>>;
};
export default function ExpenseForm({setRecentTransactions} : Props) {
  const [formData, setFormData] = useState<Transaction>({
    title: "",
    category: "",
    expense: 0,
  });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
    setRecentTransactions((prevTransactions) => [...prevTransactions,formData])
    setFormData({ title: "", category: "", expense: 0 });
  }
  return (
    <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold">Add your Expense</h2>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1 font-medium">
          Title
        </label>
        <input
          id="title"
          className="p-2 border rounded"
          placeholder="Groceries"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="category" className="mb-1 font-medium">
          Category
        </label>
        <input
          id="category"
          className="p-2 border rounded"
          placeholder="Food"
          name="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="expense" className="mb-1 font-medium">
          Expense
        </label>
        <input
          id="expense"
          type="number"
          className="p-2 border rounded"
          placeholder="12"
          name="expense"
          value={formData.expense}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) })
          }
        />
      </div>
      <button className="bg-black text-white p-2 rounded">Submit</button>
    </form>
  );
}
