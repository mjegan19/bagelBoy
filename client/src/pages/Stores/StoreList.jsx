import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_STORES } from '../../queries/stores';
import IndividualStore from '../../components/content/IndividualStore';

const StoreList = () => {

  const { loading, error, data } = useQuery(GET_STORES);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <main>
      <IndividualStore stores={data.stores} />
    </main>
  )
}

export default StoreList;