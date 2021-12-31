import { useEffect } from "preact/hooks";

const Forwarder = (props) => {

    const forward = async() => {
    const r = await fetch(`https://eraaxit-url-shortner.herokuapp.com/api/${props.id}`) //API URL should be in variables
    const json = await r.json();
    window.location.replace(`https://${json.longURL}`);
}
useEffect(() => {
    forward()

}, [])

    return (
        <div>
            hi
        </div>
    )
}

export default Forwarder
