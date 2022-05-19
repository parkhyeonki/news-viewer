import React from 'react';
import styled from 'styled-components';
const NewsList = () => {
  const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
  `;

  const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
  };
  return <NewsListBlock></NewsListBlock>;
};

export default NewsList;
