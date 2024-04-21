'use client'
import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import MailIcon from '@/icons/MailIcon'
import PassIcon from '@/icons/PassIcon'
import UserIcon from '@/icons/UserIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
  })

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí puedes enviar los datos del formulario al servidor para procesar el registro
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        // El registro fue exitoso, redirigir a la página de inicio de sesión u otra página
        // Puedes manejar la redirección aquí
        router.push('/servers') // Ejemplo de redirección a la página de inicio de sesión
      } else {
        // El registro falló, mostrar un mensaje de error al usuario
        // Puedes manejar el error aquí
        const errorMessage = await response.json() // Obtener el mensaje de error del cuerpo de la respuesta
        console.error('Error en el registro:', errorMessage)
        // Mostrar un mensaje de error al usuario
        // Puedes utilizar una notificación, un mensaje en pantalla, etc.
        // Por ejemplo, mostrar el mensaje de error en un alert:
        alert('Hubo un error en el registro: ' + errorMessage.error)
      }
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  return (
    <>
      <div className="w-96 text-center">
        <div className="">
          <Link className="flex items-center justify-center" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="aspect-square w-16"
              src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
              alt="Logo"
            />
          </Link>
          <h1 className="mb-8 mt-4 text-2xl">Register to SMWA</h1>
        </div>
        <form
          className="border-2 border-solid border-white p-4"
          onSubmit={handleSubmit}
        >
          <FormInput
            id="emailInput"
            inputName="email"
            inputType="text"
            icon={<MailIcon />}
            value={formData.email}
            onChange={handleChange}
            required
            focus
          />
          <FormInput
            id="usernameInput"
            inputName="username"
            inputType="text"
            icon={<UserIcon />}
            value={formData.username}
            onChange={handleChange}
            required
          />
          <FormInput
            id="passwordInput"
            inputName="password"
            inputType="password"
            icon={<PassIcon />}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FormInput
            id="repasswordInput"
            inputName="repassword"
            inputType="password"
            icon={<PassIcon />}
            value={formData.repassword}
            onChange={handleChange}
            required
          />
          <CustomButton id="sign-up-button" type="submit" value="Register" />
        </form>
        <br />
        <p>
          Do you have an account?{' '}
          <Link className="border-b-2 border-solid" href="/login">
            Go to login
          </Link>
        </p>
      </div>
    </>
  )
}
