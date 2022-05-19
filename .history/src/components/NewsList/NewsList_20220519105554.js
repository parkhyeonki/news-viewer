import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from '../NewsItem/NewsItem';
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const NewsList = () => {
  const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
  };

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect = () => {
    const fetchData = async () => {
      setLoading(true);
      try {
      } catch (e) {
        console.log(e);
      }
    };
  };

  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};

export default NewsList;
