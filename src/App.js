import React, { useState, useEffect } from "react"

const App = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    setBulbasaur()
  }, [])

  const setBulbasaur = async () => {
    const bulbasaur = await fetch(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    ).then(response => response.json())

    setPokemon(bulbasaur.name)
  }

  const setCharmander = async () => {
    const charmander = await fetch(
      "https://pokeapi.co/api/v2/pokemon/charmander"
    ).then(response => response.json())

    setPokemon(charmander.name)
  }

  if (!pokemon) return null

  return (
  <div>
    <h1>{ pokemon }</h1>
    <button onClick={ setCharmander }>Choose charmander!</button>
  </div>
  )
}

export { App }
