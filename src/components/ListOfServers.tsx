'use client'
import { FormDialogProps, ServerItemData } from '@/types/types.d'
import CustomButton from './CustomButton'
import ServerItem from './ServerItem'
import { FormEvent, useEffect, useState } from 'react'
import CircleXIcon from '@/icons/CircleXIcon'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

function ListOfServers() {
  const [servers, setServers] = useState<ServerItemData[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const { session } = useAuth()

  useEffect(() => {
    if (session) {
      fetch(`/api/server/${session?.userId}`, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          setServers(JSON.parse(data))
        })
    } else {
      router.refresh()
    }
  }, [session])

  // Manejador para abrir el dialog
  const handleOpenDialog = () => {
    setIsOpen(true)
  }

  // Manejador para cerrar el dialog
  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  return (
    <div className="mt-16 text-right text-[#b2b2b2] md:h-[48rem] lg:w-[48rem]">
      {/* <CustomButton
        id="create-server"
        value="+ Create a new server"
        onClick={handleOpenDialog}
      />
      <FormDialog isOpen={isOpen} onClose={handleCloseDialog} /> */}
      <div className="mt-4 flex gap-6 h-2/3 flex-col">
        {servers.length > 0 ? (
          servers?.map((server) => (
            <ServerItem key={server.id} server={server} />
          ))
        ) : (
          <>
            <span className="mt-16 text-center lg:text-2xl">
              No tienes servidores aún
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default ListOfServers

// Componente del formulario
const FormDialog = ({ isOpen, onClose }: FormDialogProps) => {
  // Manejo de estado para los campos del formulario
  const [formData, setFormData] = useState({
    serverName: '',
    serverDescription: '',
  })

  const router = useRouter()

  // Manejador de cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  // Manejador del envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/servers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: null,
          serverName: formData.serverName,
          serverDescription: formData.serverDescription,
        }),
      })
      if (response.ok) {
        console.log('Server created successfully')
        router.refresh()
      } else {
        console.error('Failed to create server:', response.statusText)
      }
    } catch (error) {
      console.error('Failed to create server:', error)
    } finally {
      onClose()
    }
  }

  return (
    <dialog
      className={`${isOpen ? 'fixed' : 'hidden'} inset-0 z-10 flex h-screen w-screen items-center justify-center overflow-y-auto bg-primary bg-opacity-35 text-[#ddd]`}
      open={isOpen}
      onClose={onClose}
      onClick={(e) =>
        (e.target as HTMLInputElement).tagName === 'DIALOG' && onClose()
      }
    >
      <div className="flex items-center justify-center text-left">
        <div className="w-96 rounded bg-primary shadow-lg">
          <h2 className="flex justify-between rounded-t bg-secondary-light p-4 text-lg font-bold">
            Crear servidor
            <button
              className="hover:text-gray-400 focus:outline-none"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <CircleXIcon />
            </button>
          </h2>

          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block text-xl" htmlFor="serverName">
                Nombre
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border bg-primary-light px-3 py-2 text-lg leading-tight shadow focus:outline-none"
                id="serverName"
                type="text"
                name="serverName"
                value={formData.serverName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-xl" htmlFor="serverDescription">
                Descripción
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border bg-primary-light px-3 py-2 text-lg leading-tight shadow focus:outline-none"
                id="serverDescription"
                type="text"
                name="serverDescription"
                value={formData.serverDescription}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                className="focus:shadow-outline rounded bg-secondary-light px-4 py-2 text-lg font-bold hover:bg-secondary focus:outline-none"
                type="submit"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  )
}
