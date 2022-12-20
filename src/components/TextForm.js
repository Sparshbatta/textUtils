import React, {useState} from 'react';


export default function TextForm(props){
    
    const [text, setText] = useState('');

    const [copiedNotification,setCopiedNotification]=useState('');

    const handleCopyText=()=>{
        navigator.clipboard.writeText(text);
        setCopiedNotification('Your text has been copied successfully');
        setTimeout(()=>{
            setCopiedNotification('');
        },2000);
        document.getSelection().removeAllRanges();
        props.showAlert('Text has been copied to clipboard','success');
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to uppercase','success');
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lowercase','success');
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert('Text has been cleared','success');
    }

    const handleExtraSpaces=()=>{
        let textInfo=text.split(/[ ]+/);
        setText(textInfo.join(" "));
        props.showAlert('Redundant spaces removed','success');
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
                <p style={{color:'green',height:'20px'}}>{copiedNotification}</p>
                <div className="mb-3">
                    <textarea className="form-control" style={{background:(props.mode==='dark')?'#201d1d':'white',color:(props.mode==='dark')?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.split(/\s+/).filter((element)=>{return element}).length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick} title='To Uppercase!'>Convert to UpperCase</button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element}).length===0} className='btn btn-dark mx-1 my-1' onClick={handleLowClick} title='To Lowercase!'>Convert to LowerCase</button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element}).length===0} className='btn btn-dark mx-1 my-1' onClick={handleClearClick} title='Clear Text!'>Clear Text</button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element}).length===0} className='btn btn-dark mx-1 my-1' onClick={handleExtraSpaces} title='Clear Extra Spaces!'>Trim Extra Spaces</button>
                <i type='button' className='bi bi-clipboard-check mx-2' onClick={handleCopyText} title='Copy Text!'></i>
            </div>

            <div className='container my-3' style={{color:(props.mode==='dark')?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element}).length} words, {text.length} characters</p>
                <p>{0.008*(text.split(/\s+/).filter((element)=>{return element}).length)} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
            </div>
        </>
    )
}