import "../css/Contact.css";
import React, {useState, useEffect, useRef} from 'react';
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';
import { GridLoader } from "react-spinners";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [sub, setSub] = useState("");
  const [val, setVal] = useState("");
  let [loading, setLoading] = useState(true);
  const form = useRef();

  const FormSubmitHandler = (e) =>{
    e.preventDefault();
    const emailPattern = /^[A-Za-z0-9._]{3,}@[a-zA-Z]{3,}[.]{1,}[a-zA-Z.]{2,6}$/g;
    if(name ===  "" || name.length < 6){
      swal("Oops!", "Wrong Name input", "error");
    }
    else if(!emailPattern.test(mail)){
      swal("Oops!", "Invalid email", "error");
    }
    else if(sub.length < 10){
      swal("Oops!", "Subject is less than ten words", "error");
    }
    else if(val.length < 50){
      swal("Oops!", "Message is less than fifty words", "error");
    }
    else{
      swal("Sent", "I will get back to you as soon as possible", "success");  
      console.log("Name: "+ name);
      console.log("Email: " + mail);
      console.log("Subject: "+ sub);
      console.log("Message: "+ val);
      setName("");
      setMail("");
      setSub("");
      setVal("");
      emailjs.sendForm(
        "service_92ghmkp",
        "template_u6025mn",
        form.current,
        "jmulddNW0pjF66328"
      ).then((result)=>{
        console.log(result.text);
      },(err)=>{
        console.log(err.text);
      });
    }
  };
  
  const HandReset = () =>{
    setName("");
    setMail("");
    setSub("");
    setVal("");
  }

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <div>
    {
    loading ?
    <div id="loader">
      <GridLoader color={"green"} loading={loading} size={15} />
    </div>
    :
    <div className='container'>
      <div className="row text-center">
        <div className="col-md-12 mt-5">
          <h1>CONTACT <span className='text-warning'>ME</span></h1>
        </div>
        <div className="col-md-6 mt-md-5 mt-3">
          <h4>Contact me!</h4>
          <p>For any query feel free to contact me, Thanks You!</p>
          
          <div className='mt-5'>
            <i class="fa-solid fa-location-dot float-start"></i>
            <span>West Bengal, India</span>
          </div>
          <div className='mt-3'>
            <i class="fa-solid fa-envelope float-start"></i>
            <span>nawazdanish1996@gmail.com</span>
          </div>
          <div className='mt-3'>
            <i class="fa-solid fa-phone float-start"></i>
            <span>+91-8391809802</span>
          </div>
          <div className='mt-3 mb-5'>
            <i class="fa-solid fa-language float-start"></i>
            <span>Hindi, Bengali, English</span>
          </div>
        </div>

        <div className="col-md-6 mb-5 mt-md-5 mt-3 text-center ">
          <form ref={form} onSubmit={FormSubmitHandler}>
            <input name="user_name" className="form-control" style={{fontWeight: "700"}} onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='FULL NAME' />
            <br />
            <input name="user_email" className="form-control" onChange={(e)=> setMail(e.target.value)} value={mail} type="email" placeholder='EMAIL'/>
            <br />
            <input name='sub' className="form-control" onChange={(e)=> setSub(e.target.value)} value={sub} type="text" placeholder='ENTER SUBJECT' />
            <br />
            <textarea name="message" className="form-control" onChange={(e)=> setVal(e.target.value)} value={val} id="" cols="30" rows="5" placeholder="Message"></textarea>
            <br />
            <div className="text-center">
              <input type="submit" value='Send' className='btn btn-success w-25' />
              <input onClick={HandReset} value='Reset' className='btn btn-success w-25 m-2' />
            </div>
          </form>
        </div>
      </div>
    </div>
    }
    </div>
  )
}

export default Contact;