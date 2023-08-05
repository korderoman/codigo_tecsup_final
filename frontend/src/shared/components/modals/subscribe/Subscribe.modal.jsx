import './Subscribe.modal.scss';
import {useForm} from "react-hook-form";
function SubscribeModal(props){
    const {register, handleSubmit, formState:{
        errors
    }} = useForm({
        defaultValues:{
            nombre: '',
            correo: ''
        }
    })

    const onSubmit= async (data) =>{
        console.log(data)
    }

    const validationName = {required:'Este campo es requerido'};
    const validationEmail = {required: 'Este campo es requerido'};
    return (
        <>
            <section className="subscribe-modal modal-sm subscribe-modal--fade-in" >
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center my-2">
                        <div>
                            <h3>Suscríbete</h3>
                            <hr style={{color:'red'}}/>
                        </div>

                    </div>
                    <div className="modal-body">
                        <div className="container my-5">
                            <form  onSubmit={handleSubmit(onSubmit)}>
                                <div className="my-5">
                                    <div className="d-flex justify-content-center">
                                        <label htmlFor="nombre" className="col-form-label me-2 me-md-4 fw-bold" >Nombre:</label>
                                        <div className="subscribe-modal__form-input">
                                            <input type="text" className={errors?.nombre ? 'form-control is-invalid':'form-control'} name="nombre" {...register('nombre',validationName)}/>
                                        </div>
                                    </div>
                                    {errors?.nombre  && <span className="text-danger">{errors?.nombre?.message}</span>}
                                </div>
                                <div className="my-5">
                                    <div className="d-flex justify-content-center">
                                        <label htmlFor="correo" className="col-form-label me-2 me-md-4 fw-bold">Correo:</label>
                                        <div className="subscribe-modal__form-input ps-2">
                                            <input type="email" className={errors?.correo ? 'form-control is-invalid':'form-control'} name="correo" {...register('correo',validationEmail)}/>
                                        </div>
                                    </div>

                                    {errors?.correo  && <span className="text-danger">{errors?.correo?.message}</span>}
                                </div>
                                <div className="my-5 d-flex justify-content-end">
                                    <button type="submit" className="btn subscribe-modal__form-submit me-2" >Enviar</button>
                                    <button type="button" className="btn subscribe-modal__form-submit" onClick={()=>props.setShowModal(false)} >Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default  SubscribeModal
