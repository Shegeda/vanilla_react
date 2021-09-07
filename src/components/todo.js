import { useState } from 'react';

import Backdrop from './backdrop';
import Modal from './modal';


function Todo(props) {
    const [showModal, setShowModal] = useState();

    function showModalHandler() {
        setShowModal(true);
    }

    function closeModalHandler() {
        setShowModal(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={showModalHandler}>Delete</button>
            </div>
            {showModal && <Backdrop onClick={closeModalHandler} />}
            {showModal && <Modal text="Are you shure?" onClose={closeModalHandler} />}
        </div>
    )
}

export default Todo;