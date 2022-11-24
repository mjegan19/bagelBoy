import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_STORES } from '../../queries/stores';
import IndividualStore from '../../components/content/IndividualStore';
import { Alert } from 'react-bootstrap';

const StoreList = () => {

  const { loading, error, data, refetch } = useQuery(GET_STORES);

  useEffect(() => {
    refetch();
  })

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    
    
    <main>
      {/* {loading && <p>Loading...</p>}
      {error ?
        <Alert color={"danger"}>{error}</Alert>  
      : */}
        <IndividualStore stores={data.stores} />
      {/* } */}
    </main>
  )
}

export default StoreList;