import React from 'react'

const GrpSummary = (props) => {

    if(props.show)
    {
        return (
        <React.Fragment>
            <nav className="panel-right">
                <div>Form No = {props.data}</div>           
            </nav>
        </React.Fragment>
        )
    }
    return null
}

export default GrpSummary
