export function Button({ children, ...rest }) {
  return (
    <button
      className="bg-[#5424FD] text-white py-2 w-full rounded-full max-w-sm hover:bg-[#5424FD] mb-[30px] h-[56px]"
      {...rest}
    >
      {children}
    </button>
  );
}
