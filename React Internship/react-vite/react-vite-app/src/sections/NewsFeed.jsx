import NewsCard from "../components/NewsCard";
import useFetch from "../hooks/GetAPI";

const NewsFeed = () => {  
  const API_URL = import.meta.env.VITE_API_URL;
  
  const { data: articles, loading, error } = useFetch(API_URL);
   
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsFeed;
