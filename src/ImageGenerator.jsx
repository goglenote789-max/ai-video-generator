import React, { useState } from 'react'

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const generateImage = async () => {
    if (!prompt) return alert('Please enter a prompt!')
    setImageUrl('https://placehold.co/400x300?text=Generating...')
    // Free public image API for demo (replace later)
    const res = await fetch(`https://api.unsplash.com/photos/random?query=${prompt}&client_id=YOUR_UNSPLASH_ACCESS_KEY`)
    const data = await res.json()
    setImageUrl(data.urls?.regular || '')
  }

  return (
    <div>
      <h2>🖼️ AI Image Generator</h2>
      <input
        type="text"
        placeholder="Enter image idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>
      {imageUrl && <img src={imageUrl} alt="AI result" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />}
    </div>
  )
}
