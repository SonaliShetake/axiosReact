import React from 'react'

function Name (props) {
    const {username,id}=props;
    return (
        <div className="name-wrapper">
             <div className="name-container">
             <div className="name-id">{id}</div>
             <div className="name">{username}</div>
            

             </div>
            

            
        </div>
    );
}
export default Name
