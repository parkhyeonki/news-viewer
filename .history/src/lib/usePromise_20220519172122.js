import React, { useEffect, useState } from 'react';

export default function usePromise(promiseCreator,deps){
    const [loading,setLoading] =useState(false);
    const [resolved, setResolved] = useState(null);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const process = async () => {
            setLoading(true);
            try {
              const query = category === 'all' ? '' : `&category=${category}`;
              const resolved = await promiseCreator();
              setArticles(response.data.articles);
            } catch (e) {
              setError(e);
            }
            setLoading(false);
          };
          process()
        }, deps);
    })
};