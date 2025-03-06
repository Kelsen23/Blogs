
const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-opacity-50 p-4 rounded-lg shadow-lg relative">
        {children}

        <button onClick={onClose} className=" flex absolute p-2 text-sm top-1 right-1 bg-transparent hover:bg-gray-200 items-center text-gray-500 rounded-full transition-200 duration-75 w-8 h-8 justify-center font-semibold cursor-pointer">X</button>
      </div>
    </div>
  );
};

export default Modal;
