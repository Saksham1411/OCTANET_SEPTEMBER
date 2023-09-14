import './Display.css';
const Display = (props) => {
    return (
        <ul>
            {/* <li>Saksham<i className="fa-solid fa-trash"></i></li> */}
            {props.items.map((item, idx) => (
                <li key={idx}>{item}
                    <i onClick={(e) => {
                        props.del(idx);
                    }}
                    className="fa-solid fa-trash"></i></li>
            ))}
        </ul>
    )
}

export default Display;