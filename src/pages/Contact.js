import "../css/Contact.css";
import React, {useState} from 'react';
import swal from 'sweetalert';

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [sub, setSub] = useState("");
  const [val, setVal] = useState("");

  // swal("Oops!", "Something went wrong, you should choose again!", "error");
  const FormSubmitHandler = () =>{
    if(name ===  ""){
      swal("Oops!", "Wrong Name input", "error");
    }
    else if(mail ===  ""){
      swal("Oops!", "Invalid email", "error");
    }
    else if(sub.length < 10){
      swal("Oops!", "Subject is less than ten words", "error");
    }
    else if(val.length < 50){
      swal("Oops!", "Message is less than fifty words", "error");
    }
    else{
      swal("Success", "I will get back to you as soon as possible", "success");  
      setName("");
      setMail("");
      setSub("");
      setVal("");
    }
  }

  return (
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


        <div className="col-md-6 mb-5 mt-md-5 mt-3">
          <form onSubmit={(e)=> e.preventDefault()}>
            <input style={{fontWeight: "700"}} onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='FULL NAME' />
            <br />
            <input onChange={(e)=> setMail(e.target.value)} value={mail} type="email" placeholder='EMAIL' />
            <br />
            <input onChange={(e)=> setSub(e.target.value)} value={sub} type="text" placeholder='ENTER SUBJECT' />
            <br />
            <textarea onChange={(e)=> setVal(e.target.value)} value={val} id="" cols="30" rows="10" placeholder="Message"></textarea>
            <br />
            <button onClick={FormSubmitHandler} type="submit" className='btn btn-success'>Submit</button>
            <button type="reset" className='btn btn-success'>Reset</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;