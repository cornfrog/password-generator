import { useState } from "react";
import { bufferToBase64 } from "../utils/buffer_converters";
import { generateRandomString } from "../utils/generators";
import "../assets/GeneratePassword.scss";

const GeneratePassword = () => {

    const [displyedPassword, setDisplayedPassword] = useState('');
    const [chosenHash, setChosenHash] = useState('SHA-256');

    const generatePassword = async (event) => {
        event.preventDefault();
        const randomStr = generateRandomString(64);
        const encoder = new TextEncoder();
        const data = encoder.encode(randomStr);
        const hashedKey = await crypto.subtle.digest(chosenHash, data);
        const hashedKeyBase64 = bufferToBase64(hashedKey);
        setDisplayedPassword(hashedKeyBase64)
    }

    const clickToCopy = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(displyedPassword);
    }

    return (
        <div className="generate-password">
            <p className="title">Generate Password</p>
            <select 
                value={chosenHash} 
                onChange={(e) => setChosenHash(e.target.value)}
                className="select-hash"
            >
                <option value="SHA-256">SHA-256</option>
                <option value="SHA-384">SHA-384</option>
                <option value="SHA-512">SHA-512</option>
                <option value="SHA-1">SHA-1 (not recommended)</option>
            </select>
            <div className="button-and-key">
                {
                    displyedPassword ?
                        <p className="displayed-password" onClick={clickToCopy}>{displyedPassword}</p>
                        : <p className="displayed-password">Generated Password Here</p>
                }
                <button
                    className="generate-password-button"
                    onClick={generatePassword}
                >
                    Generate Password
                </button>
            </div>
        </div>
    )

}

export default GeneratePassword;