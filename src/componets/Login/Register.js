import { dividerClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword ,useSignInWithGoogle} from 'react-firebase-hooks/auth';



const Register = ()=>{
    const [emails,setEmails] = useState([])
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

        if(user1){
         const name = user1.user.displayName;
         const email = user1.user.email;
         const img = user1.user.photoURL;
         const emailsInformation = {
            name:name,
            email:email,
            img:img
         }
         fetch('http://localhost:5000/email',{
            method:'POST',
            headers:{'content-type': 'application/json',},
            body:JSON.stringify(emailsInformation)

         })
         .then(res=>res.json())
         .then(data=>alert('your acout is succesfull'))
        
        }
      

    
    const onSubmit = data => {
       createUserWithEmailAndPassword(data.email, data.password);
       const emailsInformation = {
        name:data.name,
        email:data.email,
        password:data.password,

       }
       const url  = `htt://localhost:5000/email`
       fetch(url,{
           method:'POST',
           headers:{
              'content-type': 'application/json'
           },
           body:JSON.stringify(emailsInformation)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
        
       })

   }
     
    

    return(
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                             
                            })}
                        />
                        {/* <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label> */}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'pelease type a valid number'
                                }
                            })}
                        />
                        <label className="label">
                            {/* {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} */}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {/* {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} */}
                        </label>
                    </div>
                    {/* {signInError} */}
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                </form>
              
                <div className="divider">OR</div>
                <button
                   onClick={()=>{signInWithGoogle()}}
                    className="btn btn-outline"
                >Continue with Google</button>
            </div>
        </div>
    </div >
    )
}

export default Register