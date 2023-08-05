import './Contact.scss';
import {useForm} from "react-hook-form";
import {sendContact} from "@controllers/data.controller.jsx";
function Contact(){
    //JSON.parse(import.meta.env.VITE_API_KEY_FIREBASE)
    //https://www.youtube.com/watch?v=RkXv4AXXC_4&t=61s
    //submit https://www.youtube.com/watch?v=KLXDe-w5SX4
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            //isValid
        },

    } = useForm({
        defaultValues:{
            nombre:'',
            correo:'',
            asunto:'',
            mensaje:''
        }
    });
    const validationName = {required:'Este campo es requerido'};
    const validationEmail = {required: 'Este campo es requerido'};
    const validationSubject = {required: 'Este campo es requerido', minLength:{value:50, message:'Mínimo 50 caracteres'}};
    const validationMessage = {required: 'Este campo es requerido', minLength: {value:50, message: 'Mínimo 500 caracteres'}};

    /**
     * @description El método no será llamada hasta que todo el formulario este correcto
     * @param data datos del formulario
     */
    const onSubmit = async (data)=>{
        await sendContact(data)
    }

    return (
      <>
        <section className="container contact__main my-5 py-4 ">
            <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="my-5 ">
                    <div className="d-flex justify-content-center">
                        <label htmlFor="nombre" className="col-form-label me-2 me-md-4 fw-bold">Nombre:</label>
                        <div className="contact__form-input">
                            <input type="text" className={errors?.nombre ? 'form-control is-invalid':'form-control'} name="nombre" {...register('nombre',validationName)}/>
                        </div>
                    </div>
                    {errors?.nombre  && <span className="text-danger">{errors?.nombre?.message}</span>}
                </div>

                <div className="my-5">
                    <div className="d-flex justify-content-center">
                        <label htmlFor="correo" className="col-form-label me-2 me-md-4 fw-bold">Correo:</label>
                        <div className="contact__form-input">
                            <input type="email" className={errors?.correo ? 'form-control is-invalid':'form-control'} name="correo" {...register('correo',validationEmail)}/>
                        </div>
                    </div>

                    {errors?.correo  && <span className="text-danger">{errors?.correo?.message}</span>}
                </div>
                <div className="my-5">
                    <div className="d-flex justify-content-center">
                        <label htmlFor="asunto" className="col-form-label me-2 me-md-4 fw-bold">Asunto:</label>
                        <div className="contact__form-input">
                            <input type="text"  className={errors?.asunto ? 'form-control is-invalid':'form-control'} name="asunto" {...register('asunto',validationSubject)}/>
                        </div>
                    </div>
                    {errors?.asunto  && errors?.asunto?.type==="required" && <span className="text-danger">{errors?.asunto?.message}</span>}
                    {errors?.mensaje && errors?.asunto?.type==="minLength"  && <span className="text-danger">{errors?.asunto?.message}</span>}

                </div>
                <div className="my-5 ">
                    <div className="d-flex justify-content-center">
                        <label htmlFor="mensaje" className="col-form-label me-2 me-md-4 fw-bold">Mensaje:</label>
                        <div className="contact__form-input">
                            <textarea rows="4"  className={errors?.mensaje ? 'form-control is-invalid':'form-control'} name="mensaje" {...register('mensaje', validationMessage)}/>
                        </div>
                    </div>
                    {errors?.mensaje && errors?.mensaje?.type==="required"  && <span className="text-danger">{errors?.mensaje?.message}</span>}
                    {errors?.mensaje && errors?.mensaje?.type==="minLength"  && <span className="text-danger">{errors?.mensaje?.message}</span>}

                </div>
                <div className="my-5 d-flex justify-content-end">
                    <button type="submit" className="btn contact__form-submit" >Enviar</button>
                </div>
            </form>
        </section>
      </>
    );
}


export default Contact;
