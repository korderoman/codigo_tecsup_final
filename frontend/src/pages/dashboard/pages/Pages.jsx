import './Pages.scss';
import {useForm} from "react-hook-form";
import {useState} from "react";
import {sendPost} from "@controllers";

function Pages(){
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            //isValid
        },

    } = useForm({
        defaultValues:{
            titulo:'',
            contenido:'',
            imagen:'',
        }
    });

    const validationRequired = {required:'Este campo es requerido'}
    const onSubmit = async(data)=>{
        try {
            setIsLoading(true);
            await sendPost(data);
        }finally {
            setIsLoading(false);
        }
    }
    return (
        <>
           <section className="container">
               <h1 className="text-center">Crear Post</h1>
               <section className="container pages__main my-5 py-4">
                   <form onSubmit={handleSubmit(onSubmit)} className="pages__form">
                       <div className="my-5 ">
                           <div className="pages__form-block">
                               <label htmlFor="titulo" className="col-form-label me-2 me-md-4 fw-bold">Titulo:</label>
                               <div className="page__form-input">
                                   <input type="text" className={errors?.titulo ? 'form-control is-invalid':'form-control'} name="titulo" {...register('titulo',validationRequired)}/>
                               </div>
                           </div>
                           {errors?.titulo  && <span className="text-danger">{errors?.titulo?.message}</span>}
                       </div>
                       <div className="my-5 ">
                           <div className="pages__form-block">
                               <label htmlFor="contenido" className="col-form-label me-2 me-md-4 fw-bold">Contenido:</label>
                               <div className="page__form-input">
                                   <textarea rows="4" className={errors?.contenido ? 'form-control is-invalid':'form-control'} name="contenido" {...register('contenido',validationRequired)}/>
                               </div>
                           </div>
                           {errors?.contenido  && <span className="text-danger">{errors?.contenido?.message}</span>}
                       </div>
                       <div className="my-5 ">
                           <div className="pages__form-block">
                               <label htmlFor="imagen" className="col-form-label me-2 me-md-4 fw-bold w-25">imagen:</label>
                               <div className="pages__form-input w-75">
                                   <input  type="file" className={errors?.imagen ? 'form-control is-invalid':'form-control'} name="imagen" {...register('imagen',validationRequired)}/>
                               </div>
                           </div>
                           {errors?.imagen  && <span className="text-danger">{errors?.imagen?.message}</span>}
                       </div>
                       <div className="my-5 d-flex justify-content-end">
                           <button type="submit" className="btn pages__form-submit" disabled={isLoading} >Enviar</button>
                       </div>
                   </form>
               </section>
           </section>
        </>
    );
}

export default Pages;
