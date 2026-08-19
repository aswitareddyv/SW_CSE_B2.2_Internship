import{ useState } from "react";
function ToggleText() {
    const [showText,setShowText] = useState(true);

    return(
        <div>
            <h2>Toggle Text</h2>

            <button onClick={()=>setShowText(!showText)}>{showText ? "Hide" : "show"}</button>

            {showText && <p>Hello now u can see mee!!</p>}
        </div>
    );
}
export default ToggleText;