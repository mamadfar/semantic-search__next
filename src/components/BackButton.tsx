'use client';

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {ChevronLeft} from "lucide-react";

const BackButton = () => {

    const router = useRouter();

    return (
        <Button onClick={() => router.back()} variant="secondary" className="flex gap-2 items-center text-sm pb-2">
            <ChevronLeft className="h-4 w-4"/>
            Back
        </Button>
    );
};

export default BackButton;
