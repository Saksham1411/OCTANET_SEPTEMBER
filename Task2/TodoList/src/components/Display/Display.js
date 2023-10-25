import './Display.css';
const Display = (props) => {
    const list = props.items.map((item, idx) => (
        <li key={idx}>{item}
            <i onClick={() => props.del(idx)}className="fa-solid fa-trash"></i>
        </li>
    ))
    return (
        <ul>
            {/* <li>Saksham<i className="fa-solid fa-trash"></i></li> */}
            { list }
        </ul>
    )
}

export default Display;