// создаем ф-ию "modal" с пропсами которая возвращает div с classname = "modal", потом <p> внутри {prop.text} 
// потом <button> с className="btn btn--alt" и свойствои onClick={props.onClose} внутри Cancel
// потом такую же кнопку Сonfirm с className="btn", и потом експорт

function Modal(props) {
    return (
        <div className="modal">
            <p>{props.text}</p>
            <button className="btn btn--alt" onClick={props.onClose}>Cancel</button>
            <button className="btn" onClick={props.onClose}>Confirm</button>
        </div>
    )
}

export default Modal;