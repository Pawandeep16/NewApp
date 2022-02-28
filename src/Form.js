import React, { useEffect, useState } from 'react';
import { TextField, Button } from "@mui/material"
import { collection, addDoc, onSnapshot, query } from "firebase/firestore"
import { db } from './firebase';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const [password, setPassword] = useState("");


    const getData = () => {
        onSnapshot(query(collection(db, 'form'), (get) => {
            setData(get.docs.map((docs) => ({
                data: docs.data(),
                id: docs.id
            })))
        }))
    }
    console.log(data)

    useEffect(() => {
        getData()
    }, [])

    const Submit = () => {
        addDoc(collection(db, 'form'), {
            Name: name,
            email: email,
            password: password
        }).then(() => alert("u r submitted")).catch((err) => alert(err.message))
    }
    return (<div>
        <div className="form">
            <TextField id="filled-basic" label="Name" variant="filled" className="a" onChange={(e) => setName(e.target.value)} />
            <TextField id="filled-basic" label="Email" variant="filled" className="a" onChange={(e) => setEmail(e.target.value)} />
            <TextField id="filled-basic" label="Password" variant="filled" className="a" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="text" onClick={Submit}>Submit</Button>
        </div>
    </div>)
}

export default Form;
