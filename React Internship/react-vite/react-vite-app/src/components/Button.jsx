export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-white text-black hover:bg-yellow-400 px-4 py-2 rounded"
    >
      {children}
    </button>
  );
}
