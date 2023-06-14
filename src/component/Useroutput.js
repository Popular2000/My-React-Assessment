import React from 'react'

function useroutput(props) {
  const popStyle = {
    fontSize: "3rem",
    padding: "10px",
    color: "yellow"
  };

  const pop1Style = {
    fontSize: "1.5rem",
    padding: "10px",
    color: "blue"
  }
  return (
    <div>
      <p style={popStyle}>{props.username}</p>
        <p style={pop1Style}>{props.address}</p>
    </div>
  )
}

export default useroutput
