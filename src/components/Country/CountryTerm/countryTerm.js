import React from 'react';

const countryTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.continent}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default countryTerm;