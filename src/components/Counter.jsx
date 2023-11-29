import {useState} from "react";

function Counter(props) {
    let {start} = props;
    let [count,setCount] = useState(start);
    let incCount = () => {
        console.log("clicked");
        setCount(count + 1);
    };
    let decCount = () => {
        console.log("clicked");
        setCount(count - 1);
    };
    return (
        <>
            <section className="text-center">
                <p className="fw-bold h4">{count}</p>
                <button className="btn btn-danger btn-sm" onClick={decCount}>Dec</button>
                <button className="btn btn-success btn-sm ms-1 " onClick={incCount}>INC</button>
            </section>
            <hr/>
        </>
    );
}

export default Counter;