"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    searchParams ? searchParams.get("term") : ""
  );

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search?term=${encodeURI(searchQuery)}&pageNumber=1`);
    }
  };

  return (
    <form role="search" onSubmit={onSearch} className="flex justify-center w-2/3">
      <input
        type="search"
        autoFocus
        maxLength={800}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={searchQuery ?? ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-slate-200 bg-slate-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-slate-100 placeholder:text-slate-400"
        placeholder="What do you want to listen?"
      />
    </form>
  );
};

export default SearchInput;
