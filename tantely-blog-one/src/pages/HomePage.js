import React from 'react'
import textGen from '../data/textGen'

const HomePage = () => (
    <>
        <h1>Welcome to home page</h1>
        <p>{textGen(0)}</p>
        <p>{textGen(1)}</p>
    </>
)

export default HomePage