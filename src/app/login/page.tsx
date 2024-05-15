'use client'
import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import UserIcon from '@/icons/UserIcon'
import PassIcon from '@/icons/PassIcon'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({ username: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // Aquí puedes enviar los datos del formulario al servidor para procesar el inicio de sesión
      // Por ejemplo, con fetch o axios
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // El inicio de sesión fue exitoso, redirigir a la página de inicio u otra página
        router.push('/servers') // Redirige a la página de inicio
      } else {
        // El inicio de sesión falló, mostrar un mensaje de error al usuario
        const errorMessage = await response.json()
        console.error('Error en el inicio de sesión:', errorMessage.error)
        alert('Hubo un error en el inicio de sesión.\n' + errorMessage.error)
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error)
    }
  }

  return (
    <>
      <div className="flex h-full flex-col items-center justify-center text-center font-bold text-[#b2b2b2]">
        <div className="w-full">
          <h1 className="mb-8 mt-4 text-2xl text-accent md:text-4xl">Login</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-4 border-solid border-secondary-light p-4 md:w-1/2 lg:w-1/3 2xl:w-1/4"
        >
          <FormInput
            id="usernameInput"
            inputName="username"
            inputType="text"
            icon={<UserIcon height={'36'} width={'36'} />}
            focus
            onChange={handleChange}
          />
          <FormInput
            id="passwordInput"
            inputName="password"
            inputType="password"
            icon={<PassIcon height={'36'} width={'36'} />}
            onChange={handleChange}
          />
          <CustomButton id="login-btn" value="Login" />
        </form>
        <br />
        <p className="mt-2 md:text-xl">
          Don&apos;t have an account?{' '}
          <Link
            className="border-b-2 border-solid border-current"
            href="/register"
          >
            Go to register
          </Link>
        </p>
      </div>
    </>
  )
}
