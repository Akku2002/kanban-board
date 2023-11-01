import { useRef,useEffect } from "react";
import { Form } from "react-router-dom"

export default function Display({grouping,ordering,inlineStyle}) {
    const formRef = useRef();

    const onChangeHandler = ()=>{
        formRef.current.requestSubmit();
    }

    useEffect(()=>{
        if (!(grouping && ordering)){
            formRef.current.requestSubmit();
        }
    },[])

    return (
        <li style={inlineStyle} className="dropdown container-shadow">
            <Form  ref={formRef} method="post" action="/">
                <div className="flex-container">
                    <label htmlFor="grouping">Grouping</label>
                    <select style={{marginBottom:"10px"}} className="container-shadow dropdown-menu flex-container" onChange={onChangeHandler} id="grouping" name="grouping" defaultValue="status" required>
                        <option value="status">Status</option>
                        <option value="userId">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="flex-container">
                    <label htmlFor="ordering">Ordering</label>
                    <select className="container-shadow dropdown-menu flex-container" onChange={onChangeHandler} id="ordering" name="ordering" defaultValue="priority" required>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </Form>
        </li>
    )
}




