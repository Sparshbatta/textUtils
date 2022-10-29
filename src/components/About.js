import React from 'react';

export default function About(props) {

    
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(40 75 102)':'white',
        border:'2 px solid',
        borderColor:props.mode==='dark'?'#042743':'white'
    }

    let myHeader={
        color:props.mode==='dark'?'white':'black'
    }

    return (
        <div className='container'>
            <h2 style={myHeader}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze text of any length
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>No text limit!</strong> Feel free to add as many text as you want for the purpose of analysis and modification. With faster processing and quick results, our site assures premium user experience that does not jeopardise with your pocket money.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free and Easy to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>For beginners!</strong> Specially designed for all people ranging from beginners to advanced, easy to use and fairly easy to analyze, and you can avail all of this comes at no cost.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Don't worry about inconsistencies!</strong> Compatible with all the popular modern gen. browsers like Opera, Chrome, Firefox, Edge and Brave.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}