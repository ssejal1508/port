import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import { Alert } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_u4emmoo', 
      'template_59lboah', 
      formRef.current,
      'czWctOM2vVmnZfYre' 
    )
    .then((result) => {
      console.log(result.text);
      setLoading(false);
      showAlert('Email sent successfully!', 'success');
      setForm({ name: "", email: "", message: "" });
    }, (error) => {
      console.log(error.text);
      setLoading(false);
      showAlert('Failed to send email. Please try again later.', 'error');
    });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert?.message && (
        <Alert message={alert.message} type={alert.type} onClose={hideAlert} />
      )}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='johndoe@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

    
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
