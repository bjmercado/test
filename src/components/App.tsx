import React, { FormEvent } from 'react';
import { useEffect } from 'react';

const App: React.FC = (): JSX.Element => {
    const [usrname, setUsrname] = React.useState<string>("");
    const [pwrd, setPwrd] = React.useState<string>("");
    const [cnfrmpwrd, setCnfrmpwrd] = React.useState<string>("");
    const [msg, setMsg] = React.useState<string>("");
    const [btnStat, setBtnStat] = React.useState<boolean>(true);

    useEffect(() => {
        if (usrname.length < 8 || pwrd.length < 8 || (pwrd !== cnfrmpwrd))
        {
            setMsg("validation failed");
            setBtnStat(true);
        }else
        {
            setMsg("");
            setBtnStat(false);
        }
    })

    const onFormSubmit = (e: FormEvent): void => {
        e.preventDefault()
    };

    const onUsernameChange = (e: FormEvent<HTMLInputElement>): void => {
       setUsrname(e.currentTarget.value);
    };

    const onPasswordChange = (e: FormEvent<HTMLInputElement>): void => {
       setPwrd(e.currentTarget.value);
    };

    const onConfirmPasswordChange = (e: FormEvent<HTMLInputElement>): void => {
        setCnfrmpwrd(e.currentTarget.value);
    };
    
  

    return(
        <div>
            <div>
                <p>Message: {msg}</p>
            </div>
            <form onSubmit={onFormSubmit}>
                <input type="username" name="" id="" onChange={onUsernameChange}/>
                <input type="password" name="" id="" onChange={onPasswordChange}/>
                <input type="confirmPassword" name="" id="" onChange={onConfirmPasswordChange}/>
                <button type="submit" disabled={btnStat}>Register</button>
            </form>
        </div>
    );
}

export default App;