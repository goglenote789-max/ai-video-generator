import React, { useState } from 'react'

export default function VoiceoverGenerator() {
  const [text, setText] = useState('')
  const [audioUrl, setAudioUrl] = useState('')

  const generateVoice = async () => {
    if (!text) return alert('Enter text first!')
    // Free demo API for TTS
    const apiUrl = `https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(text)}`
    setAudioUrl(apiUrl)
  }

  return (
    <div>
      <h2>🎤 Voiceover Generator</h2>
      <textarea
        rows="3"
        placeholder="Type something to generate voice..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={generateVoice}>Generate Voice</button>
      {audioUrl && (
        <audio controls style={{ marginTop: '10px', width: '100%' }}>
          <source src={audioUrl} type="audio/mp3" />
        </audio>
      )}
    </div>
  )
}
