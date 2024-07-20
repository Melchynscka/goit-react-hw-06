import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    return (
        <div className={css.searchWrapper}>
            <p>Find contacts by name</p>  
            <input
                className={css.searchInput}
                type="text"
                value={filters.name}
                onChange={e => dispatch(changeFilter(e.target.value))} />
        </div>
    );
}
