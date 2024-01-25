import './skeleton.scss';

const Skeleton = ({ className }) => {
   return (
      <div className={`skeleton ${className}`}>
         <div className="skeleton__img"></div>
         <div className="skeleton__content">
            <div className='skeleton__item'></div>
            <div className='skeleton__item'></div>
            <div className='skeleton__item'></div>
            <div className='skeleton__item'></div>
         </div>
      </div>
   );
};

export default Skeleton;