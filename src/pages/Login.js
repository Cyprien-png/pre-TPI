import React from 'react'
import blob from "../images/blob.svg"
import { useState } from 'react'

const Login = () => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const send = () => {
        if(mail.length == 0) document.getElementById('mail').classList.add('error')
        if(password.length == 0) document.getElementById('password').classList.add('error')
    }

    return (
        <>
            <div className='absolute h-full w-full overflow-hidden'>
                <img className='h-full' src={blob} alt="" />
            </div>

            <div className='h-full flex items-center justify-center'>


                <div className='glassy bg-glass-white border-t-[1px] border-l-[1px] rounded-3xl w-1/2 p-8 flex flex-col items-center'>
                    <h2>Entrez vos informations de connexion</h2>



                    <form>
                        <label>Adresse mail</label>
                        <input id="mail" className='placeholder:text-slate-300' placeholder='adresse mail' value={mail} onChange={(m)=>setMail(m.target.value)}></input>
                        <label>Mot de passe</label>
                        <input id="password" className='placeholder:text-slate-300' placeholder='mot de passe' value={password} onChange={(p)=>setPassword(p.target.value)} type="password"></input>
                    </form>

                    <button className='w-40 mt-12' onClick={()=>send()}>Envoyer</button>
                </div>

            </div>
        </>
    )
}

export default Login