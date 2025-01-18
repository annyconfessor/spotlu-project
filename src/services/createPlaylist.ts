import { currentToken } from "@/constants/config"
import { spotifyEndpoint } from "@/constants/config"

type CreatePlaylistPropsTypes = {
  userId: string
  playlistName: string
  description?: string
}

const createPlaylist = async ({userId, playlistName, description}: CreatePlaylistPropsTypes) => {

  if (!currentToken?.access_token) {
    throw new Error("Token de acesso não disponível.");
  }

  const payload = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${currentToken.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: playlistName,
      description: description,
      public: false
    })
  }

  try {
    const response = await fetch(`${spotifyEndpoint}/users/${userId}/playlists`, payload)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Erro ao criar playlist: ${response.status} - ${errorData.error?.message || "Erro desconhecido"}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Erro ao criar playlist:", error)
    throw error
  }
}

export { createPlaylist }