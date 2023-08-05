import './Login.scss';
import {useForm} from "react-hook-form";
import {serializeUser, signIn} from "@controllers";
import {useDispatch} from "react-redux";
import {addUser} from "../../store/features/auth/auth.slice.jsx";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@services";

function Login() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            //isValid
        },

    } = useForm({
        defaultValues:{
            correo:'',
            password:''

        }
    });
    const checkUser =async ()=>{
        await onAuthStateChanged(auth,(firebaseUser)=>{
            if(firebaseUser && firebaseUser.uid){
                const userSerialized = serializeUser(firebaseUser)
                dispatch(addUser({user:userSerialized}))
            }else{
                console.log("no existe usuario")
            }

        })
    }

    useEffect(()=>{
        checkUser()
    })

    const onSubmit = async (data)=>{
        const userCredentials=await signIn(data.correo,data.password);
        if(userCredentials){
            const userSerialized = serializeUser(userCredentials);
            dispatch(addUser({user:userSerialized}))

        }
    }
    const validationEmail = {required: 'Este campo es requerido'};
    const validationPassword = {required: 'Este campo es requerido'};

    return (
        <section className="login__card row">
            <section className="login__jumbotron col-6">
                <img className="login__card-jumbotron" src="./images/logo/login.jpg" alt="jumbotron" />
            </section>
            <section className="col-md-6 col-xs-12">
                <div className="login__body ps-md-5">
                    <div className="card" style={{width: "24rem"}}>
                        <div className="logo__content pb-4">
                            <img className="login__card-logo" src="./images/logo/login.jpg" alt="logo" />
                        </div>
                        <div className="login__card-body card-body">
                            <section>
                                <h2 className="text-center text-white fw-bold">LOGIN</h2>
                                <form onSubmit={handleSubmit(onSubmit)}  className="pb-5">
                                    <div className="mb-3">
                                        <label htmlFor="correo" className="form-label text-white fw-bold">Correo</label>
                                        <input type="text" className="form-control " name="correo" {...register('correo',validationEmail)}  />
                                    </div>
                                    {errors?.correo  && <span className="text-white">{errors?.correo?.message}</span>}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label text-white fw-bold">Contraseña</label>
                                        <input type="password" className="form-control" name="password" {...register('password',validationPassword)} />
                                    </div>
                                    {errors?.password  && <span className="text-white">{errors?.password?.message}</span>}
                                    <div className="mb-3 d-flex flex-row-reverse">
                                        <button type="submit" id="btnLogin" className="btn btn-submit btn-primary btn-lg">Ingresar
                                        </button>
                                    </div>
                                </form>
                            </section>

                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export  default  Login
