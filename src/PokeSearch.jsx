import React from 'react'

function PokeSearch(props){
    let eachItem = props.fetchData.abilities.map(each => each.name);

    return(
        <div>
            <ul>
                {eachItem}
            </ul>
        </div>
    )
}

export default PokeSearch