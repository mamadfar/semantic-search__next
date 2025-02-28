'use client'

import {FormEvent, useRef, useState, useTransition} from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2, Search} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";

const SearchBar = () => {

    const searchParams = useSearchParams()
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState(searchParams.get('q') || '');

    const [isSearching, startTransition] = useTransition()
    const router = useRouter();

    const search = () => {
        startTransition(() => {
            router.push(`/search?q=${query}`)
        })
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            inputRef.current?.blur();
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        search();
    }

    return (
        <div className="relative w-full h-14 flex flex-col">
            <form onSubmit={onSubmit} className="relative h-14 z-10 rounded-md">
                <Input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)}
                       onKeyDown={handleKeyDown}
                       disabled={isSearching}
                       className="absolute inset-0 h-full"/>
                <Button size="sm" disabled={isSearching} className="absolute right-0 inset-y-0 h-full rounded-l-none">
                    {isSearching ? <Loader2 className="animate-spin h-6 w-6"/> : <Search className="h-6 w-6"/>}
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;
