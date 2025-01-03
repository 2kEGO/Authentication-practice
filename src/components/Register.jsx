/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect} from "react"


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    },[user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const cond1 = USER_REGEX.test(user);
        const cond2 = PWD_REGEX.test(pwd);
        if (!cond1 || !cond2) {
            setErrMsg('Invalid');
            return;
        }
        console.log(user, pwd)
        setSuccessMsg(true);
    }

    return (   
        <>
            <section>
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">Username:</label>
                    <input 
                        type="text"
                        id="userName"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-describedby="uid"
                        aria-invalid={validName? 'false' : 'true'}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}                   
                    />


                    <label htmlFor="pwd">Password:</label>
                    <input 
                        type="password"
                        id="pwd"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-describedby="uid"
                        aria-invalid={validPwd? 'false' : 'true'}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}                        
                    />

                    <label htmlFor="confirmPwd">Confirm Password:</label>
                    <input 
                        type="password"
                        id="confirmPwd"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-describedby="uid"
                        aria-invalid={validMatch? 'false' : 'true'}
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}                        
                    />

                    
                    <button disabled={!validName || !validPwd || !validMatch ? 'false' : 'true'}>Sign Up</button>

                </form>
            </section>
        </>
    )
}