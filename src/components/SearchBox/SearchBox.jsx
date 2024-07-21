import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import {selectNameFilter} from "../../redux/contactsSlice";

export default function SearchBox() {
    const filters = useSelector(selectNameFilter);
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
