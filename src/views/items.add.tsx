import { useState } from "react";
import { useDispatch } from 'react-redux';
import { appendItem } from '../redux/actions';

const ItemsAdd = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    function addItem() {
        dispatch(appendItem(text));
        setText('');
    }
    return (
        <div>
            <input value={text} onChange={(event) => setText(event.target.value)} />
            <button onClick={addItem} >add</button>
        </div>
    );
};

export default ItemsAdd;