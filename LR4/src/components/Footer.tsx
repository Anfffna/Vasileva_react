import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter, VisibilityFilters } from '../store/actions';

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}>
        Все
      </button>
      <button onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}>
        Активные
      </button>
      <button onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}>
        Завершенные
      </button>
    </div>
  );
};

export default Footer;
