import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Registry(){

    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [error, setError] = useState(false);


    const addItem = (e) => {
        e.preventDefault()
        if (error) return
        if (textInput !== '') {
            const tempData = [...registryData];
            tempData.push(textInput);
            setRegistryData(tempData);
            setTextInput('');
        } else {
            setError(true);
        }
    }

    const removeItem = (e) => {
        let tempData = [...registryData];
        tempData.splice(e, 1);
        setRegistryData(tempData);
    }

    const editData = (e) => {
        if (error) return
        let tempData = [...registryData];
        tempData[e] = textInput
        setRegistryData(tempData);
    }

    useEffect(() => {
        if (textInput.length > 10) setError(true);
        else setError(false);
    }, [textInput])

    console.log(registryData);

    return (
        <div>
            <h1>Registry</h1>
            <Link to='/' id='Registry'>click here to go to Home</Link>
            <form onSubmit={addItem}>
                <label>
                    Text Input :
            <input type='text'value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                </label>
                <input type="submit" value='submit' />
            </form>
            {error ? <span style={{color: 'red'}}>error occured</span> : null}
            {
                registryData.map((data, index) => {
                    return (
                        <li key={index}>{data} <button onClick={() => {removeItem(index)}}>Remove</button> <button onClick={() => {editData(index)}}> Edit</button></li>
                    )
                })
            }
        </div>
    )
}

export default Registry;