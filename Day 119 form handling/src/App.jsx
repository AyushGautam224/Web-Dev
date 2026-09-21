import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,

    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
      resolve()
      }, d*1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(4)
    console.log(data)
  }
  return (
    <>
    {isSubmitting && <div>Loading...</div> }
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>  
          <input placeholder='password' {...register("password")} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled= {isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
