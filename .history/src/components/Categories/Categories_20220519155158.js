import React from 'react';
import styled from 'styled-components';
const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((category) => (
        <Category key={category.name}>{category.text}</Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
