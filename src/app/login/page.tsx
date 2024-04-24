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
        router.refresh() // Redirige a la página de inicio
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
          <h1 className="mb-8 mt-4 text-2xl">Login to SMWA</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-2 border-solid border-white p-4"
        >
          <FormInput
            id="usernameInput"
            inputName="username"
            inputType="text"
            icon={<UserIcon />}
            focus
            onChange={handleChange}
          />
          <FormInput
            id="passwordInput"
            inputName="password"
            inputType="password"
            icon={<PassIcon />}
            onChange={handleChange}
          />
          <CustomButton id="login-btn" value="Login" />
        </form>
        <br />
        <p className="mt-2">
          Don&apos;t have an account?{' '}
          <Link className="border-b-2 border-solid" href="/register">
            Go to register
          </Link>
        </p>
      </div>
    </>
  )
}