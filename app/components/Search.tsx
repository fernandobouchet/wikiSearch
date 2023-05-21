'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="bg-white p-2 w-48 md:w-80 text-xl rounded-xl text-slate-700"
      />
      <button className="rounded-xl w-12 bg-blue-500 p-1">Go!</button>
    </form>
  );
};

export default Search;
