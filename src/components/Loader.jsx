import './Loader.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Watch } from 'react-loader-spinner';

const Loader = props => {
  const { showLoader } = props;
  return <>{
    showLoader && <div className='Loader'>
      <Watch width={250} height={250} color={'#FF9200'} />
    </div>}</>

}

Loader.propTypes = {
  showLoader: PropTypes.bool.isRequired
}

export default Loader