'use client'

import {useRef} from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";

const SearchBar = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            inputRef.current?.blur();
        }
    }

    return (
        <div className="relative w-full h-14 flex flex-col">
            <div className="relative h-14 z-10 rounded-md">
                <Input ref={inputRef} onKeyDown={handleKeyDown} className="absolute inset-0 h-full"/>
                <Button className="absolute right-0 inset-y-0 h-full rounded-l-none"><Search className="h-6 w-6"/></Button>
            </div>
        </div>
    );
};

export default SearchBar;
