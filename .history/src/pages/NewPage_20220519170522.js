import React from 'react';
import { useParams } from 'react-router-dom';

const NewPage = () => {
  const params = useParams();

  const category = params.category || 'all';
  return <div></div>;
};

export default NewPage;
