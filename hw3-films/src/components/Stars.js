import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star';

function Stars({count}) {
    if (!count ||                  
        !Number.isInteger(count) || 
        count < 1 || 
        count > 5)
    {
        return null;
    } 

    return (
        <ul className='card-body-stars u-clearfix'>
            {
                Array(count).fill("sraka").map((element, index) => {      
                    return <Star key={index} />
                })
            }
        </ul>
    )
}

Stars.defaultProps = {
    count : 0
}

Stars.propTypes = {
    count : PropTypes.number
}

export default Stars
