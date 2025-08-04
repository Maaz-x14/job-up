const NewsCard = ({ article }) => {
  const { title, description, urlToImage, url, source, publishedAt } = article;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded overflow-hidden">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {description?.slice(0, 100)}...
        </p>
        <p className="text-xs text-gray-500 mb-1">
          Source: {source?.name} |{" "}
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        <a
          href={url}
          target="_blank"    // New page
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Read more 
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
