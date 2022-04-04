import React from 'react';
import {useHistory} from 'react-router-dom';

const CountryAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        "country": "",
        "continent": ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const country = formData.country;
        const continent = formData.continent;

        props.onAddCountry(country, continent);
        history.push("/countries");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input type="text"
                               className="form-control"
                               id="country"
                               name="country"
                               required
                               placeholder="Enter country"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="continent">Continent</label>
                        <input type="text"
                               className="form-control"
                               id="continent"
                               name="continent"
                               required
                               placeholder="Enter continent"
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CountryAdd;
