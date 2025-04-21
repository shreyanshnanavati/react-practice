import { useState } from "react";

export default function ExpenseForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    expense: "",
  });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
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
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </div>
      <button className="bg-black text-white p-2 rounded">Submit</button>
    </form>
  );
}
