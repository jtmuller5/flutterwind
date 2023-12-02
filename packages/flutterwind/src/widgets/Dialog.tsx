import React from "react";
import { useState, useCallback } from "react";
import ts from "typescript";

interface DialogProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ onClose, children }) => {
  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box">
        {children}
        <div>
          <button onClick={()=>onClose} className="btn btn-primary">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = useCallback(() => {
    (document.getElementById("my_modal_1") as HTMLFormElement).showModal();
    setIsOpen(true);
  }, []);
  const closeDialog = useCallback(() => {
    console.log("closeDialog");
    setIsOpen(false);
    (document.getElementById("my_modal_1") as HTMLFormElement).close();
  }, []);

  return { isOpen, openDialog, closeDialog };
};
