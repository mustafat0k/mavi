import React from 'react'

const AddPlace = ({}) =>{
    return <div>
        <div className='form'>
            <div className="form-control" id="formGridCity">
                <label>City</label>
                <div />
            </div>

            <div className="form-control" id="formGridState">
                <label>State</label>
                <select name="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </select>
            </div>

            <div className="form-control" id="formGridZip">
                <label>Zip</label>
                <div />
            </div>
        </div>
    </div>
}

export default AddPlace;