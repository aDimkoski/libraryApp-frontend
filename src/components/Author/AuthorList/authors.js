import React from 'react';
import AuthorTerm from "../AuthorTerm/authorTerm";
import {Link} from "react-router-dom";

const authors = (props) => {
    return (
        <div className={"container p-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Surname</th>
                            <th scope={"col"}>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map((term) => {
                            return (
                                <AuthorTerm term={term} onDelete={props.onDelete}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Link className={"btn btn-block btn-dark mt-5"} to={"/authors/add"}>Add new author</Link>
                </div>
            </div>
        </div>
    )
}

export default authors;