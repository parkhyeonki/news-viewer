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
  border: 1px solid black;
  width: 768px;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const Category = styled.div`
  padding: 0.5rem;
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
