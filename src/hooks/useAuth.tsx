import { redirectUri } from "@/constants/config"
import { redirectToSpotifyAuthorize } from "@/services/app"

export const loginWithSpotifyClick = async () => {
  await redirectToSpotifyAuthorize()
}

export const logoutClick = () => {
  localStorage.clear()
  window.location.href = redirectUri
}