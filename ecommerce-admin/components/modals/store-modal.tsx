"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(1)
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        //TODO: Create Store
    }

    return (
    <Modal 
        title="Create Store" 
        description="Add a new store to manage products" 
        isOpen={storeModal.isOpen} onClose={storeModal.onClose}
    >
        Future Create Store Form 
    </Modal>
    )
}