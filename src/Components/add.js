import React from 'react'
import {InputGroup,FormControl,Button} from 'react-bootstrap';
function Add() {
    return (
        <div>
            <h1>TODO APP!!!</h1>
     <div className="addd">
            <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    </InputGroup>
    <Button>add </Button>
    </div>
    
    
        </div>

    )
}

export default Add
