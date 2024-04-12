'use client'
import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import MailIcon from '@/icons/MailIcon'
import Link from 'next/link'

export default function ForgotPassword() {
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
          <h1 className="mb-8 mt-4 text-2xl">Recover your password</h1>
        </div>
        <form className="border-2 border-solid border-white p-4">
          <FormInput
            id="emailInput"
            inputName="email"
            inputType="text"
            icon={<MailIcon />}
            focus
          />
          <CustomButton id="recover-password-button" value="Recover password" />
        </form>
        <br />
        <p>
          Do you have an account?{' '}
          <Link className="border-b-2 border-solid" href="/sign-in">
            Sign in
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
