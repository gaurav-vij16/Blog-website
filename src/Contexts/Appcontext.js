import { createContext, useEffect, useState } from "react";



// Create a context
const AppContext = createContext();
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export default function AppContextProvider({ children }) {
  const [currPage, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [posts, setPosts] = useState([]);

  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
  const url = `${baseUrl}?page=${currPage}`;
  
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json()
      console.log("Response from API:", responseData)
      setPosts(responseData.posts)
      setPage(responseData.page)
      setTotalPages(responseData.totalPages);
    }
     catch (error) {
      console.error("Error fetching data from API:", error);
      // Handle the error, such as displaying an error message to the user
    }
    setLoading(false);
  }

  function handlePageChange(page){
    setPage(page);
  }

  useEffect(() => {
    fetchData(); // Call fetchData without passing currPage as argument
  }, [currPage]); // Update fetchData when currPage changes

  const value = {
    posts,
    setPosts,
    currPage,
    setPage, handlePageChange, // Use handlePageChange to update currPage
    isLoading,
    setLoading,
    totalPages,
    setTotalPages,
    fetchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}


export { AppContext }; // Export the context for other components to use
