//component import
import Ticket from "./ticket";

//helper functions 
import { statusIcon,priorityIcon,priorityName } from "../helper";

export default function GroupedTickets({grouping,groupingItem,tickets,users}) {
    let name = "";
    let icon = "";
    if(grouping === "status"){
        icon = statusIcon[groupingItem];
        name = groupingItem;
    }
    else if(grouping === "priority"){
        icon = priorityIcon[groupingItem];
        name = priorityName[groupingItem];
    }
    else{
        for(let user of users){
            if(user.id === groupingItem){
                name = user.name;
                break;
            }
        }
    }

    return (
        <section className="grouped-tickets">
            <ul className="group-header flex-container">
                <li>
                    <ul className="group-details flex-container">
                        <li>{icon}</li>
                        <li>{name}</li>
                        <li>{tickets.length}</li>
                    </ul>
                </li>

                <li>
                    <ul className="group-details flex-container">
                        <li><span className="material-symbols-outlined">add</span></li>
                        <li><span className="material-symbols-outlined">more_horiz</span></li>
                    </ul>
                </li>
            </ul>
            {
                tickets.map((t)=><Ticket grouping={grouping} details={t}/>)
            }
            
        </section>
    );
}