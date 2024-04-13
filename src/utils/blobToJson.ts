export function blobToJson(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result)
        resolve(json)
      } catch (error) {
        reject(error)
      }
    }
    reader.onerror = reject
    reader.readAsText(blob)
  })
}