'use client'
import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import MailIcon from '@/icons/MailIcon'
import PassIcon from '@/icons/PassIcon'
import UserIcon from '@/icons/UserIcon'
import Link from 'next/link'

export default function SignUp() {
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
          <h1 className="mb-8 mt-4 text-2xl">Sign up to SMWA</h1>
        </div>
        <form className="border-2 border-solid border-white p-4">
          <FormInput
            id="emailInput"
            inputName="email"
            inputType="text"
            icon={<MailIcon />}
            focus
          />
          <FormInput
            id="usernameInput"
            inputName="username"
            inputType="text"
            icon={<UserIcon />}
          />
          <FormInput
            id="passwordInput"
            inputName="password"
            inputType="password"
            icon={<PassIcon />}
          />
          <FormInput
            id="repasswordInput"
            inputName="retype-password"
            inputType="password"
            icon={<PassIcon />}
          />
          <CustomButton id="sign-up-button" value="Sign up" />
        </form>
        <br />
        <p>
          Do you have an account?{' '}
          <Link className="border-b-2 border-solid" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
    </>
  )
}
