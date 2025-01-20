import { redirectUri } from "@/constants/config"
import { redirectToSpotifyAuthorize } from "@/utils/auth"

const loginWithSpotify = async () => {
  await redirectToSpotifyAuthorize()
}

const logout = () => {
  localStorage.clear()
  window.location.href = redirectUri
}

export  { loginWithSpotify, logout }