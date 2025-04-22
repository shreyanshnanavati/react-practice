
export default function Card({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <img
        src="https://placehold.co/600x400"
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Contact
        </button>
      </div>
    </div>
  );
}
