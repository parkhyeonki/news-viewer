import React from 'react';

const NewsItem = ({ article }) => {
  const [title, description, url, urlToImage] = article;

  return (
    <div>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
    </div>
  );
};

export default NewsItem;
