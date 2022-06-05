import Button from "./Button";

const Modal = ({ setIsOpen, afterDismiss, children }) => {
    const closeModal = () => {
        setIsOpen(false);
        if (afterDismiss) afterDismiss();
    }
    return (
        <>
            <div className="absolute h-screen w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000033] " onClick={closeModal}/>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white min-h-[20%] min-w-[70%] md:min-w-[30%] px-4 py-8 flex flex-col items-center justify-center font-medium text-center">
                {children}
                <Button onClick={closeModal}> Ok </Button>
            </div>
        </>
    );
}
export default Modal;
