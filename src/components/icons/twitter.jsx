import React from 'react';
import cl from 'classnames';

const Twitter = ({ className }) => {
  return (
    <svg width='20' height='20' className={cl('fill-current', className)}>
      <path d='M11.8616 8.46864L19.147 0H17.4206L11.0947 7.3532L6.04225 0H0.214844L7.85515 11.1193L0.214844 20H1.94134L8.62162 12.2348L13.9574 20H19.7848L11.8612 8.46864H11.8616ZM9.49695 11.2173L8.72283 10.1101L2.56342 1.29967H5.21521L10.1859 8.40994L10.9601 9.51718L17.4214 18.7594H14.7696L9.49695 11.2177V11.2173Z' />
    </svg>
  );
};

export { Twitter };
