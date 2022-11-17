import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FiMonitor } from 'react-icons/fi';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaFileSignature } from 'react-icons/fa';

import RatingsList from '../../components/common/RatingsList';

import { GET_STORE_BY_ID } from '../../queries/stores';

const AddressHeader = styled(Col)`
  margin: 0 2rem 2rem 0.7rem;
  /* padding: 0.3rem; */
  background-color: var(--light-highlight);
`;

const DisplayBox = styled(Col)`
  margin: 4rem 2rem;
  padding: 1.5rem;
  align-items: center;
  background-color: var(--dark-background);
  color: var(--light-white);
`;

const IconBox = styled.div`
  margin-bottom: 1.5rem;
`;

const IconText = styled.div`
  font-family: var(--headings);
  font-size: 1.5rem;
`;

const StyledImg = styled.img`
  max-width: 250px;
  border-radius: 100%;
`;

const StyledRow = styled(Row)`
  background-color: var(--dark-background);
  padding-top: 0.5rem;

  h3 {
    color: var(--light-white);
  }
`;

const StoreDetailed = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_STORE_BY_ID, {
    variables:
      {id: params.id}
  });

  const [storeData, setStoreData] = useState({
    id: params.id,
    storeName: "",
    streetAddress: "",
    city: "",
    phone: "",
    website: "",
    signatureBagel: "",
    description: "",
    storePhoto: "",
  });

  const { id, storeName, streetAddress, city, phone, website, signatureBagel, description, storePhoto } = storeData;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <main>
      <h1>{data.store.storeName}</h1>
      <Row><AddressHeader>{data.store.streetAddress}, {data.store.city}</AddressHeader></Row>
      <Row>
        <Col><StyledImg src={data.store.storePhoto} alt={data.store.storeName} /></Col>
        <Col>{data.store.description}</Col>
      </Row>
      <Row className="text-center">
        <DisplayBox>
          <IconBox><FaFileSignature size={80} /></IconBox>
          <IconText>Their Signature Bagel</IconText>
          <div>{data.store.signatureBagel}</div>
        </DisplayBox>
        <DisplayBox>
          <IconBox><BsFillTelephoneOutboundFill size={80} /></IconBox>
          <IconText>Give Them a Ring</IconText>
          <div>{data.store.phone}</div>
        </DisplayBox>
        <DisplayBox>
          <IconBox><FiMonitor size={80}/></IconBox>
          <IconText>Surf Their Web</IconText>
          <div>{data.store.website}</div>         
        </DisplayBox>
      </Row>

      <StyledRow>
        <Col><h3>Lastest Reviews</h3></Col>
        <Col className="align-middle text-end pe-3">
          <Button 
            type="button" 
            className="btn btn-sm btn-warning" 
            onClick={() => {navigate(`/reviews/${data.store._id}`)}}
          >
            Add a Review
          </Button>
        </Col>
      </StyledRow>
      <RatingsList id={params.id}/>
    </main>
  )
}

export default StoreDetailed;