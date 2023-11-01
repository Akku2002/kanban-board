//React import 
import { useState } from "react"

//Component imports
import Display from "../components/display";
import { Outlet, useLoaderData } from "react-router-dom";

//Route-Element
export default function RootLayout() {

    const [grouping,ordering] = useLoaderData();

    const [opacity,setOpacity] = useState(0);
    const inlineStyle = {opacity:opacity};

    const onClickHandler = ()=>{
        setOpacity((prevValue)=>prevValue^1);
    }

    return (
        <>
            <header className="adjust-width">
                <nav>
                    <ul className="display-nav">
                        <li>
                            <button className="dropdown-menu container-shadow flex-container" onClick={onClickHandler}>
                                <span className="material-symbols-outlined">tune</span>
                                <span>Display</span>
                                <span className="material-symbols-outlined">expand_more</span>
                            </button>
                        </li>
                        <Display grouping={grouping} ordering={ordering} inlineStyle={inlineStyle}/>
                    </ul>
                </nav>
            </header>
            <div className="container-shadow display-main">
                {<Outlet/>}
            </div>
        </>

    )
}

//Loader Function
export const rootLoader = ()=>{
    const grouping = localStorage.getItem("grouping");
    const ordering = localStorage.getItem("ordering");
    return [grouping??false,ordering??false];
}

//Action Function 
export const setUserPreference = async({request})=>{
    const data = await request.formData();
    localStorage.setItem("grouping",data.get("grouping"));
    localStorage.setItem("ordering",data.get("ordering"));
    return null;
}