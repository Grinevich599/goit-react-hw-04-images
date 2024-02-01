import React from 'react';
import { LoaderWraper, LoadText } from './Loader.styled';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWraper>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4d6da9"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <LoadText>Loading...</LoadText>
    </LoaderWraper>
  );
};
