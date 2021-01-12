import React from 'react';
const Filter = (props) => {
    return (
        <header>
            <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Filter your podcast"
                value={props.query}
                onChange={props.onChange}
            />
        </header>
    )

}
export default Filter;