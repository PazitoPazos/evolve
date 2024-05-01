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

  const { session } = useAuth()

  useEffect(() => {
    fetch(`/api/server/${session?.userId}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setServers(JSON.parse(data))
      })
  }, [])

  // Manejador para abrir el dialog
  const handleOpenDialog = () => {
    setIsOpen(true)
  }

  // Manejador para cerrar el dialog
  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  return (
    <div className="w-[48rem] text-right">
      <CustomButton
        id="create-server"
        value="+ Create a new server"
        onClick={handleOpenDialog}
      />
      <FormDialog isOpen={isOpen} onClose={handleCloseDialog} />
      {servers.length > 0 ? (
        servers?.map((server) => <ServerItem key={server.id} server={server} />)
      ) : (
        <>
          <div className="mt-4 flex h-96 items-center justify-center border">
            <span className="text-2xl">No tienes servidores aún</span>
          </div>
        </>
      )}
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
      className={`${isOpen ? 'fixed' : 'hidden'} inset-0 z-10 flex h-screen w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-25`}
      open={isOpen}
      onClose={onClose}
      onClick={(e) =>
        (e.target as HTMLInputElement).tagName === 'DIALOG' && onClose()
      }
    >
      <div className="flex items-center justify-center text-left">
        <div className="w-96 rounded bg-white shadow-lg">
          <h2 className="flex justify-between rounded-t bg-indigo-500 p-4 text-lg font-bold text-white">
            Crear servidor
            <button
              className="text-white hover:text-gray-400 focus:outline-none"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <CircleXIcon />
            </button>
          </h2>

          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="serverName"
              >
                Nombre
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border bg-slate-300 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="serverName"
                type="text"
                name="serverName"
                value={formData.serverName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="serverDescription"
              >
                Descripción
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border bg-slate-300 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
                className="focus:shadow-outline rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-600 focus:outline-none"
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
