import React from 'react';
//Faq is a component that we can use for an faq page by adding more questions and answers.

function Faq() {
  return (
    <div style={{ width: '50%', margin: "auto", justifyContent: "center" }}>
      <h2 style={{ marginBottom: "10px" }}>FAQ</h2>
      <div className="chat chat-start">
        <div className="chat-bubble">I dropped my sweater in the toiler<br />Do you guys do refunds?.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Hell to the naw</div>
      </div>    <h2 style={{ marginBottom: "10px" }}>Shipping</h2>
      <div className="chat chat-start">
        <div className="chat-bubble">How much is shipping?</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Free everywhere in the states, 20 dollars anywhere overseas!</div>
      </div>
    </div>
  )
}

export default Faq;