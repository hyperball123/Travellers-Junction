import { useForm } from "react-hook-form"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import AuthBackground from "../../ui/AuthBackground"

function Register() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  
function onSubmit(data) {
  console.log("Form data:", data);
}


  return (
    <AuthBackground>
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mt-20">Ready to Wander!🌐</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label='Full Name' error={errors?.name?.message}>
            <Input type="text" id='name' {...register('name', {
              required:'This field is required',
            })} />
          </FormRow>
          <FormRow label="Email">
            <Input type="email" id='email' {...register('email', {
              required: 'This field is required',
              pattern: {
                 value: /\S+@\S+\.\S+/,
                 message: "Please provide a valid email address",
              }
            })} />
          </FormRow>
          <FormRow label="Create Password">
            <Input type="password" id='password' {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password need a minimum of 8 characters',
              }
            })} /> 
          </FormRow>
          <FormRow label="Repeat Password">
            <Input type="password" id="passwordConfirm" {...register('passwordConfirm', {
              required: 'This field is required',
              validate:(value) => value === getValues().password || 'Passwords need to match',
            })} />
          </FormRow>
          <FormRow>
            <Button size='Medium' customStyle={{fontSize: '1.2rem'}}>Sign Up</Button>
          </FormRow>
        </Form>
       </AuthBackground>
  )
}

export default Register
