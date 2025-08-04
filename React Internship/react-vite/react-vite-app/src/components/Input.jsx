export default function Input({ label, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type='text'
      />
    </div>
  );
}
