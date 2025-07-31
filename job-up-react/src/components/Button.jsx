export function Button({ children, ...rest }) {
  return (
    <button
      className="bg-indigo-600 text-white py-2 w-full rounded-full max-w-sm hover:bg-indigo-700 mb-[30px] h-[56px]"
      {...rest}
    >
      {children}
    </button>
  );
}
