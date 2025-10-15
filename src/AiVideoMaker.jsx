import React, { useState } from 'react'

export default function AiVideoMaker() {
  const [videoPrompt, setVideoPrompt] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  const generateVideo = async () => {
    if (!videoPrompt) return alert('Enter a prompt!')
    setVideoUrl('https://placehold.co/400x250?text=Video+Generating...')
    // Placeholder demo — real API can be connected later
    setTimeout(() => {
      setVideoUrl('https://samplelib.com/lib/preview/mp4/sample-5s.mp4')
    }, 2000)
  }

  return (
    <div>
      <h2>🎥 AI Video Generator</h2>
      <input
        type="text"
        placeholder="Describe your video idea..."
        value={videoPrompt}
        onChange={(e) => setVideoPrompt(e.target.value)}
      />
      <button onClick={generateVideo}>Generate Video</button>
      {videoUrl && (
        videoUrl.includes('mp4')
          ? <video src={videoUrl} controls width="100%" style={{ borderRadius: '8px', marginTop: '10px' }} />
          : <img src={videoUrl} alt="Video Placeholder" style={{ width: '100%', borderRadius: '8px' }} />
      )}
    </div>
  )
}
