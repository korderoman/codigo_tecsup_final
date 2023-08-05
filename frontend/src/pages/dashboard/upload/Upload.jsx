import './Upload.scss';
import {useForm} from "react-hook-form";
import {sendDocument} from "@controllers";
import {useState} from "react";

function Upload(props){
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm({
        titulo:'',
        descripcion:'',
        autor:'',
        categoria:'',
        documento:''
    })

    const validationRequired ={required:' Este campo es requerido'};

    const onSubmit=async (data)=>{
        try {
            setIsLoading(true)
            await sendDocument(data)
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <>
            <section className="container upload__main my-5 py-4">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="my-5 ">
                        <div className="d-flex justify-content-center">
                            <label htmlFor="titulo" className="col-form-label me-2 me-md-4 fw-bold w-25">titulo:</label>
                            <div className="contact__form-input w-75">
                                <input type="text" className={errors?.titulo ? 'form-control is-invalid':'form-control'} name="titulo" {...register('titulo',validationRequired)}/>
                            </div>
                        </div>
                        {errors?.titulo  && <span className="text-danger">{errors?.titulo?.message}</span>}
                    </div>
                    <div className="my-5 ">
                        <div className="d-flex justify-content-center">
                            <label htmlFor="descripcion" className="col-form-label me-2 me-md-4 fw-bold w-25">descripción:</label>
                            <div className="contact__form-input w-75">
                                <input type="text" className={errors?.descripcion ? 'form-control is-invalid':'form-control'} name="descripcion" {...register('descripcion',validationRequired)}/>
                            </div>
                        </div>
                        {errors?.descripcion  && <span className="text-danger">{errors?.descripcion?.message}</span>}
                    </div>
                    <div className="my-5 ">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="autor" className="col-form-label me-2 me-md-4 fw-bold w-25">autor:</label>
                            <div className="contact__form-input w-75">
                                <input type="text" className={errors?.autor ? 'form-control is-invalid':'form-control'} name="autor" {...register('autor',validationRequired)}/>
                            </div>
                        </div>
                        {errors?.autor  && <span className="text-danger">{errors?.autor?.message}</span>}
                    </div>
                    <div className="my-5 ">
                        <div className="d-flex justify-content-center">
                            <label htmlFor="categoria" className="col-form-label me-2 me-md-4 fw-bold w-25">categoría:</label>
                            <div className="contact__form-input w-75">
                                <select  className={errors?.categoria ? 'form-control is-invalid':'form-control'} name="categoria" {...register('categoria',validationRequired)}>
                                    {
                                        props.categories.map((c,i)=>(
                                            <option key={i} value={c.value}>
                                                {c.label}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        {errors?.categoria  && <span className="text-danger">{errors?.categoria?.message}</span>}
                    </div>
                    <div className="my-5 ">
                        <div className="d-flex justify-content-center">
                            <label htmlFor="documento" className="col-form-label me-2 me-md-4 fw-bold w-25">documento:</label>
                            <div className="contact__form-input w-75">
                                <input  type="file" className={errors?.documento ? 'form-control is-invalid':'form-control'} name="documento" {...register('documento',validationRequired)}/>
                            </div>
                        </div>
                        {errors?.documento  && <span className="text-danger">{errors?.documento?.message}</span>}
                    </div>
                    <div className="my-5 d-flex justify-content-end">
                        <button type="submit" className="btn contact__form-submit" disabled={isLoading} >Enviar</button>
                    </div>
                </form>
            </section>
        </>
    );
}
Upload.defaultProps={
    categories: [
        {
            value: 'anime',
            label:'Anime'
        },
        {
            value: 'videogames',
            label: 'Video Games'
        }
    ]
}

export  default Upload
