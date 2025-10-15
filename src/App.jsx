import React from 'react'
import AiVideoMaker from './AiVideoMaker'
import ImageGenerator from './ImageGenerator'
import VoiceoverGenerator from './VoiceoverGenerator'

export default function App() {
  return (
    <div className="container">
      <h1>🎬 AI Video, Image & Voiceover Generator</h1>
      <AiVideoMaker />
      <ImageGenerator />
      <VoiceoverGenerator />
    </div>
  )
}
