import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useRef } from 'react'

function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmail = () => {
        const params = {
            "from_name": `${nameRef.current.value} (tema e-mail: ${emailRef.current.value})`,
            "from_name": nameRef.current.value + "(tema e-mail: " + emailRef.current.value + ")",
            "to_name": "Veebilehe haldaja",
            "message": messageRef.current.value
        }
    
    emailjs.send('service_enc290a', 'template_zbxt7u2', params, 'j_ePGUxkr48bkDG-m')
    .then(() => {
        toast.success("Edukalt saadetud")
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
    }, (error) => {
        toast.error(error.text);
    });
};

    return (
        <div>
            <label> Sinu nimi </label> <br/>
            <input ref= {nameRef} type="text" /> <br/>
            <label> Sinu email </label> <br/>
            <input ref= {emailRef} type="text" /> <br/>
            <label> Sinu sõnum </label> <br/>
            <input ref= {messageRef} type="text" /> <br/>



            <button onClick={sendEmail}>Saada e-mail</button>
        </div>
      );
}

export default Contact;