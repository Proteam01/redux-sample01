import { useSelector, useDispatch } from 'react-redux';
import { removeItemRedux } from '../redux/actions';

const ItemList = () => {

    const items = useSelector((state: any) => state.items);
    const dispatch = useDispatch()

    const removeItem = (item: any) => {
        dispatch(removeItemRedux(item));
    }

    return (
        <div>
            <ul>
                {items.map((item: any) => <li key={item} >{item} <button onClick={() => removeItem(item)} >x</button> </li>)}
            </ul>
        </div>
    );
}

export default ItemList;
