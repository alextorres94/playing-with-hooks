import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { render, wait, fireEvent, waitForElement } from "@testing-library/react"
import { App } from "./App"

it("should see bulbasaur by default", async () => {
  const { getByText } = render(<App />)

  await wait(() => {
    expect(getByText("bulbasaur")).toBeInTheDocument()
  })
})

it("should see charmander when press the button", async () => {
  const { getByText } = render(<App />)

  const button = await waitForElement(() => getByText('Choose charmander!'))

  fireEvent.click(button)

  await wait(() => {
    expect(getByText("charmander")).toBeInTheDocument()
  })
})
