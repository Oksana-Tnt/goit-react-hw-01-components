import PropTypes from 'prop-types';

export const Head = ({id, clas, children}) => {
  console.log(children);
    return (
      <>
      {children}
      <p id={id} className={clas}>I am Head</p>
     </>    
    )  
      
  }

  Head.propTypes = {
      id : PropTypes.string.isRequired,
      clas : PropTypes.string.isRequired,
      children : PropTypes.array
  }