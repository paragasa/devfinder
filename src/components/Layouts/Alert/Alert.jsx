import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Alert.styles';

const Alert = ({alert}) => {
  return (
      alert!==null &&(
        <div className={`alert alert-${alert.type}`}>
          <i class="fa fa-info-circle"></i>{alert.msg}
        </div>
      )
    );
};
  
  

Alert.propTypes = {
  
};

Alert.defaultProps = {
  // bla: 'test',
};

export default Alert;
