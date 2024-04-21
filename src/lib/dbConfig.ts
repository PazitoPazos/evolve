import mysql, { Connection } from 'mysql2/promise'

// Configuración de la conexión a la base de datos
const mysqlConfig: mysql.ConnectionOptions = {
  host: process.env.DB_HOST, // Host de la base de datos
  port: parseInt(process.env.DB_PORT!), // Puerto de la base de datos
  user: process.env.DB_USER, // Nombre de usuario
  password: process.env.DB_PASS, // Contraseña
  database: process.env.DB_NAME, // Nombre de la base de datos
}

// Verificar si todas las variables de entorno necesarias están definidas
if (!mysqlConfig.host || !mysqlConfig.port || !mysqlConfig.user || !mysqlConfig.password || !mysqlConfig.database) {
  console.error("Faltan algunas variables de entorno necesarias para la configuración de la base de datos.");
  process.exit(1); // Salir del proceso con un código de error
}

// Función para conectar a la base de datos
export async function connectDB(): Promise<Connection> {
  try {
    // Crear una conexión a la base de datos
    const connection = await mysql.createConnection(mysqlConfig)
    return connection
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
    throw error
  }
}
