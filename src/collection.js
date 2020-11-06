import React from 'react'

function Collection(props){
    return(
        <div>
            <h1>Collected Pokemon</h1>
            <ul>
                {props.collection.map((pokemon)=>(
                <li>{pokemon}</li>    
                ))}
            </ul>
        </div>
    )
}
export default Collection