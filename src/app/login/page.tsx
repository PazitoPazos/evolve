'use client'
import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import UserIcon from '@/icons/UserIcon'
import PassIcon from '@/icons/PassIcon'
import Link from 'next/link'

export default function SignIn() {
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
          <h1 className="mb-8 mt-4 text-2xl">Sign in to SMWA</h1>
        </div>
        <form className="border-2 border-solid border-white p-4">
          <FormInput
            id="usernameInput"
            inputName="username"
            inputType="text"
            icon={<UserIcon />}
            focus
          />
          <FormInput
            id="passwordInput"
            inputName="password"
            inputType="password"
            icon={<PassIcon />}
          />
          <CustomButton id="login-button" value="Sign in" />
        </form>
        <br />
        <p>
          <Link className="border-b-2 border-solid" href="/recover-password">
            Forgot your password?
          </Link>
        </p>
        <p className="mt-2">
          Don&apos;t have an account?{' '}
          <Link className="border-b-2 border-solid" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </>
  )
}
