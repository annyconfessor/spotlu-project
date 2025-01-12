import styled from "styled-components"
import { useState, useEffect } from "react"
import getArtists from "@/services/getArtists"

const StyledDiv = styled.div`
color: #FFFF;
`

const Artists = () => {
  const [artists, setArtists] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArtists()
      setArtists(data)
    }

    fetchData()
  }, [])

  return(
    <StyledDiv>
      <h1>artists</h1>
    </StyledDiv>
  )
}

export default Artists