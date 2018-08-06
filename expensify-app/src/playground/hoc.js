// Higher Order Componenet (HOC) - A component (HOC) that renders another component

//Advantages

// Reuse code
// Render hijacking
// Prop manipulating
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is:{props.info}</p>
    </div>

)

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info pls don't share.</p>}
            <WrappedComponent {...props} />
        </div>

    )

}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : 'pls login first'}

        </div>

    )

}


const AdminInfo = WithAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


ReactDOM.render(<AuthInfo isAuthenticated={true} isAdmin={true} info='These are the details' />, document.getElementById('root'));