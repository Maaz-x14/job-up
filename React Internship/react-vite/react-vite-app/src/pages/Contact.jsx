import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useForm } from '../../hooks/useForm';

export default function Contact() {
  const { values, handleChange, resetForm } = useForm({
    // These are the initial values
    name: 'Alisa',
    email: 'alisa@example.com',
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setModalOpen(true);
    resetForm();
  };

  return (
    <main className="p-6 max-w-xl mx-auto mt-10 bg-gray-700 rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Contact Form</h1>
      <form onSubmit={handleSubmit}>  
        <Input label="Name" name="name" value={values.name} onChange={handleChange} />
        <Input label="Email" name="email" value={values.email} onChange={handleChange} />
        <Button type="submit">Submit</Button>  {/* Here Submit is child */}
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Thank you!</h2>
        <p>Message Recieved</p>
      </Modal>
    </main>
  );
}
