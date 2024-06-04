import React, { forwardRef, useImperativeHandle, useState } from 'react'

function Form(props, ref) {
    const [userInfo, setUserInfo] = useState({
        name: 'Abel',
        age: 21
      })

    const submitForm = () => {
        alert('SUBMITTED');
    };

    console.log({ref});

    useImperativeHandle(ref, () => {
        return {
            test: () => {
                return userInfo;
            },
            submitForm: submitForm
        }
    });

    return (
        <>
            <h4>Login Form</h4>
            <form>
                <label for='user-name'>USER NAME</label>
                <input id='user-name' type='text' />
                <br />
                <label for='password'>PASSWORD</label>
                <input id='password' type='password' />
                <br />
                <button onClick={submitForm}>Login</button>
            </form>
        </>
    );
}

export default forwardRef(Form);