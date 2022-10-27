import React, {useState} from 'react';


export default function TextForm(props){
    
    const [text, setText] = useState('');

    const [copiedNotification,setCopiedNotification]=useState('');

    const handleCopyText=()=>{
        var textInfo=document.getElementById('myBox');
        textInfo.select();
        navigator.clipboard.writeText(textInfo.value);
        setCopiedNotification('Your text has been copied successfully');
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText);
    }

    const handleExtraSpaces=()=>{
        let textInfo=text.split(/[ ]+/);
        setText(textInfo.join(" "));
    }

    const handleOnChange=(event)=>{
        console.log('On Change');
        setText(event.target.value);
    }

    //text = 'Modified' //wrong way to change the state of a variable

    //correct way to change the state of a variable
    // setText('New Text');
    return (
        <>
            <div className='container' style={{color:(props.mode==='dark')?'white':'black'}}>
                <h1>{props.heading}</h1>
                <p style={{color:'green'}}>{copiedNotification}</p>
                <div className="mb-3">
                    <textarea className="form-control" style={{background:(props.mode==='dark')?'grey':'white',color:(props.mode==='dark')?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-success mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-danger mx-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-warning mx-1' onClick={handleExtraSpaces}>Trim Extra Spaces</button>
                <i type='button' className='bi bi-clipboard-check mx-2' onClick={handleCopyText}></i>
            </div>

            <div className='container my-3' style={{color:(props.mode==='dark')?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text===""?0:text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*(text===""?0:text.split(" ").length)} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview here'}</p>
            </div>
        </>
    )
}