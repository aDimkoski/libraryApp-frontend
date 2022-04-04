import React from 'react';
import CountryTerm from "../../Country/CountryTerm/countryTerm";
import {Link} from "react-router-dom";

const countries = (props) => {
    return (
        <div className={"container p-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Country</th>
                            <th scope={"col"}>Continent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.countries.map((term) => {
                            return (
                                <CountryTerm term={term} onDelete={props.onDelete}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Link className={"btn btn-block btn-dark mt-5"} to={"/countries/add"}>Add new country</Link>
                </div>
            </div>
        </div>
    )
}

export default countries;