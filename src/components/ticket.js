import { priorityIcon, statusIcon } from "../helper";

export default function Ticket({grouping,details}) {
    return (
        <article className="card container-shadow">
            <ul>
                <li>{details.id}</li>
            </ul>

            <ul className="card-detail flex-container">
                {
                    (grouping === "status")?null:(<li>{statusIcon[details.status]}</li>)
                }
                <li>{details.title}</li>
            </ul>

            <ul className="card-detail flex-container">
                {
                    (grouping === "priority")?null:(<li>{priorityIcon[details.priority]}</li>)
                }
                <li></li>
                {
                    (details.tag) && (<li>
                        <span class="material-symbols-outlined">
                            radio_button_unchecked
                        </span>
                        {details.tag[0]}
                    </li>)
                }
            </ul>
        </article>
    )
}