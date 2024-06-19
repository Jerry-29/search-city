import { Inter } from "next/font/google";
import SearchBox from "@/components/Search/SearchComponent";
import { CustomTable } from "@/components/Table/Table";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = async (query) => {
    setQuery(query);
    if (!query) {
      setResults(null);
      return;
    }

    setLoading(true);
    setResults([]);

    const options = {
      method: 'GET',
      url: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
      params: { namePrefix: query, limit },
    };

    try {
      const response = await axios.request(options);
      setResults(response.data.data);
      setTotalPages(Math.ceil(response.data.metadata.totalCount / limit));
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handleSearch(query);
  };

  const handleLimitChange = (newLimit) => {
    const validLimit = Math.min(10, Math.max(1, newLimit));
    console.log(validLimit, newLimit)
    if (newLimit > 10) {
      alert('The maximum limit is 10. Please enter a value between 1 and 10.');
      return
    }

    setLimit(validLimit);
    setCurrentPage(1);
    handleSearch(query);
  };

  return (
    <div className="container">
      <h1 className='search_places_text'>Search Places</h1>
      <SearchBox onSearch={handleSearch} />
      <CustomTable results={results} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />
    </div>
  );
};
