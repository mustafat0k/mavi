import React, {useEffect, useState} from 'react'
import {FiPlus, FiX} from "react-icons/fi";
import {Form, Row, Col} from "react-bootstrap";

const tagData = [
    'PHP', "Javascript", "Wordpress", "React", "Nodejs", "Docker", "ElasticSearch"
]

const Tag = ({values, setFieldValue})  => {
    const [tags, setTags] = useState(values || null)
    const [showInput, setShowInput] = useState(false)
    const [input, setInput] = useState('')

    useEffect(()=>{
    })

    const inputChange = (e) => {
         setInput(e.target.value);

    }

    const tagHandler = (id) =>{
        setTags(tags.filter((item,index) => {
            return index != id;
        }))

    }

    const _handleKeyDown = (e) => {
        let value = e.target.value
        if (e.key === 'Enter') {
            //setInput(value);
            var val = value.trim().toLowerCase();
            if(val != '') setTags([...tags, val])
            console.log(tags)
            setFieldValue("tags",{tags:[...tags, value.trim()]})
            setShowInput(false)
            setInput('')
        }


    }

    return (
        <div className="tags">
            <div>
                {tags.map((item, key) =>{
                    return <div className="btn btn-light btn-sm mt-2 mr-2" key={key}> {item} <FiX onClick={()=>{ tagHandler(key) }} /> </div>
                })}
            </div>

            {showInput ?  <Row>
                <Col md={3} className="mt-3 mb-3">
                    <input autoFocus  type="text" value={input || ''} onChange={inputChange} onKeyDown={_handleKeyDown} className="form-control"  />
                </Col>
            </Row>
           : <div className="btn btn-light btn-sm mt-3 mb-3 btn-plus" onClick={()=>{  setShowInput(true) }}> <FiPlus /> Ekle </div>  }
        </div>
    )
}

export default Tag;