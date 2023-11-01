import Axios from "axios";
import { useLoaderData } from "react-router-dom";

//Component imports
import GroupedTickets from "../components/grouped-tickets";

//styling imports
import "../App.css";

export default function DisplayCards() {
    const [grouping,groupedTickets,users] = useLoaderData();

    const display = ()=>{
        const res = [];
        for(let key in groupedTickets){
            res.push(<GroupedTickets grouping={grouping} groupingItem={key} tickets={groupedTickets[key]} users={users} />);
        }
        return res;
    }

    return (
        <main className="flex-container adjust-width display-items">
            {  
                display()
            }
        </main>
    )
}


//comparison function 

//Loader Function 
export const displayCardsLoader = async()=>{
    const {tickets,users} = await Axios.get("https://api.quicksell.co/v1/internal/frontend-assignment ").then((res)=>res.data);
    const grouping = localStorage.getItem("grouping");
    const ordering = localStorage.getItem("ordering");

    const groupedTickets = {};

    for(let ticket of tickets){
        if(grouping === "status") {
            if(ticket.status in groupedTickets){
                groupedTickets[ticket.status].push(ticket);
            }
            else {
                groupedTickets[ticket.status] = [ticket];
            }

        }
        else if(grouping === "userId"){
            if(ticket.userId in groupedTickets) {
                groupedTickets[ticket.userId].push(ticket); 
            }
            else {
                groupedTickets[ticket.userId] = [ticket];
            }
        }
        else{
            if(ticket.priority in groupedTickets) {
                groupedTickets[ticket.priority].push(ticket);
            }
            else {
                groupedTickets[ticket.priority] = [ticket];
            }
        }
    }

    if(ordering === "title"){
        for(let key in groupedTickets){
            groupedTickets[key].sort((t1,t2)=>t1.title.localeCompare(t2.title));
        }
    }
    else{
        for(let key in groupedTickets){
            groupedTickets[key].sort((t1,t2)=>t2.priority - t1.priority);
        }
    }

    return [grouping,groupedTickets,users];
}