import create from "zustand";

interface useStoreModalInterface {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void; // Corrected typo here
}

export const useStoreModal = create<useStoreModalInterface>((set) => ({ // Corrected syntax here
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }), // Corrected syntax and typo here
}));
