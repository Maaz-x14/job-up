export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">x</button>
        {children}
      </div>
    </div>
  );
}
