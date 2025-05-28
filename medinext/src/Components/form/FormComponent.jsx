import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import styles from './FormComponentStyles.module.css'
import { ModalComponent } from '../modal/ModalComponent';
import successIcon from '../../assets/icons/success.png'
import failIcon from '../../assets/icons/fail.png'

export const FormComponent = () => {
	const form = useRef();
    const [formData, setFormData] = useState({
		name: '',
		email: "",
		subject: "",
		message: "",
	});
	const [ modalData, setModalData ] = useState({
		icon: '',
		text: ''
	});

	const [ showModal, setShowModal ] = useState(false);
		
	const [errors, setErrors] = useState({});
	
	const handleChange = (e) => {
		const { name, value } = e.target;
	
		setFormData({
		...formData,
		[name]: value,
		});
	};
    
	const validate = () => {
	const newErrors = {};
	if (!formData.name) {
		newErrors.name = 'El nombre es obligatorio';
	} else if (formData.name.length < 3) {
		newErrors.name = 'El nombre debe tener mas de 3 caracteres';
	}
	if (!formData.email) newErrors.email = "El correo es obligatorio";
	else if (!/\S+@\S+\.\S+/.test(formData.email))
		newErrors.email = "Correo inválido";

	if (!formData.subject) newErrors.subject = "El asunto es obligatorio";
	if (!formData.message) newErrors.message = "El detalle es obligatorio";

	return newErrors;
    };
    
	const handleSubmit = (e) => {
		e.preventDefault();
		const serviceID = 'service_mcsxukx'
		const templateID = 'template_uz4iro8'
		const publicKey = 'dV8yHQ3ElsBtu-T66'
		const validationErrors = validate();

		if (Object.keys(validationErrors).length === 0) {
			
			emailjs.sendForm(serviceID, templateID, form.current, publicKey)
			.then(result => console.log(result.text))
			.catch(error => console.error(error));

			console.log("Formulario enviado:", formData);
			setModalData({
				icon : successIcon,
				text : 'Mensaje enviado correctamente! en brebe uno de nuestros acesores se comunicará con usted.'
			});
			setShowModal(true);
			setTimeout(() => setShowModal(false), 7000); // 7 segundos
			setFormData({ name:"", email: "", subject: "", message: "" });
		} else {
			setErrors(validationErrors);
			setModalData({
				icon : failIcon,
				text : 'Hubo un error al enviar su consulta, por favor, aguarde unos instantes e intente nuevamente, o comuniquese por nuestros otros medios de contacto.'
			});
			setShowModal(true);
			setTimeout(() => setShowModal(false), 7000); // 7 segundos
		}
	};
    
	return (
		<>
			<form className={styles.form} ref={form} onSubmit={handleSubmit}>
				<label>Nombre y apellido:</label>
				<input
				type="text"
				name="name"
				id='name'
				value={formData.name}
				onChange={handleChange}
				className={styles.input}
				/>
				{errors.name && <label className={styles.error}>{errors.name}</label>}
				
				<label>Email:</label>
				<input
				type="email"
				name="email"
				id='email'
				value={formData.email}
				onChange={handleChange}
				className={styles.input}
				/>
				{errors.email && <label className={styles.error}>{errors.email}</label>}

				<label>Asunto:</label>
				<input
				type="text"
				name="subject"
				id='subject'
				value={formData.subject}
				onChange={handleChange}
				className={styles.input}
				/>
				{errors.subject && <label className={styles.error}>{errors.subject}</label>}

				<label>Detalle:</label>
				<textarea
				name="message"
				id='message'
				value={formData.message}
				onChange={handleChange}
				className={styles.textarea}
				/>
				{errors.message && <label className={styles.error}>{errors.message}</label>}

				<button type="submit" className={styles.button}>Enviar</button>
			</form>	

			{showModal &&
				<ModalComponent icon= {modalData.icon} text= {modalData.text} onClose={() => setShowModal(false)} />
			}	
		</>

	);
}
