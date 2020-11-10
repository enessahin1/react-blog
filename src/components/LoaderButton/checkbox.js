import React from 'react'
import { Button } from 'react-bootstrap'

const chackboxBtn = ({ className, id, text }) => (
    <div className="form-group">
        <div className={className}>
            <input type="checkbox" className="custom-control-input" id={id} />
            <label className="custom-control-label" htmlFor={id}>{text}</label>
        </div>
    </div>
)
export default chackboxBtn