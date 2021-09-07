// создаем ф-ию "backdrop" c пропсами, она возвращет div с классом 'backdrop', и свойство по клику (props.onClick)
function Backdrop(props) {
    return (
        <div className='backdrop' onClick={props.onClick} />
    )
}

//  ексортируем по умолчанию "backdrop"
export default Backdrop;