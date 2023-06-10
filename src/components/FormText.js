import React, { useState } from "react";
export default function FormText(props) {

  const handleUpperCase = () => {
    // console.log('Clicked on handle ' + text)
    // setText('Hey this is me');

    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Text converted to uppercase', 'Success')
  };

  const handleOnChange = (e) => {
    console.log('On change')
    setText(e.target.value)
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Text converted to lowercase', 'Success');
  }

  const handleClearCase = () => {
    let newText = '';
    setText(newText)
    props.showAlert('Text cleared', 'Success')
  }
  const handleCopyCase = () => {
    navigator.clipboard.writeText(text)
    // document.getSelection.removeAllRanges()
    props.showAlert('Text Copied to clipboard', ' ')
  }

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    // msg.text = text;
    window.speechSynthesis.speak(msg);

    const toogle = document.getElementById('toggle');
    if (toogle.innerHTML === "Speak") {
      toogle.innerHTML = "Stop";
      props.showAlert('Played', 'Success');

    }
    else {
      toogle.innerHTML = "Speak"
      props.showAlert('Stopped', 'Success')
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel()

      }
    }
  }
  const [text, setText] = useState("");
  //   setText('New text');

  return (
    <>
      <div>
        <div className="container mt-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
          <h1 >{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? '#fff' : 'black' }}></textarea>
          </div>
          <button disabled={text.length === 0} className="btn btn-primary upper mx-2" onClick={handleUpperCase}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className="btn btn-primary lower mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
          <button disabled={text.length === 0} className="btn btn-primary lower mx-2" onClick={handleClearCase}>Clear</button>
          <button disabled={text.length === 0} className="btn btn-primary lower mx-2" id="handleCopy" onClick={handleCopyCase}>Copy</button>
          <button disabled={text.length === 0} type="submit" onClick={handleSpeak} className="btn btn-primary mx-2 my-2" id="toggle">Speak</button>
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h4 className="mt-3">Your text summary</h4>
        {/* <p> {text.split(' ').length} word and {text.length-text.split(' ').length+1} characters</p> */}
        <p> <b>{text.split(' ').filter((element)=>{return element.length!==0}).length}</b> word and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length}</b> minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
