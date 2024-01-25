import errorImg from '../../assets/error.png';

const ErrorMessage = () => {
   return (
      <div className="error-message">
         <img className='error-message__img'
            style={{ display: "block", maxWidth: '100%', margin: '0 auto' }}
            src={errorImg}
            alt="error"
         />
      </div>
   );
};

export default ErrorMessage;