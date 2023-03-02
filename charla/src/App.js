import { useState } from 'react'

function App() {

  const handleSubmit = (e) =>{
    try {
      e.preventDefault()
      fetch('http://localhost:3030',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },body: JSON.stringify({name, photo, colors, rol, bio})

      }).then(res => res.json()).then(data => setResponse(data.message))
    } catch (error) {
      
    }
  }
  
  const [name, setName ] = useState('')
  const [photo, setPhoto ] = useState('')
  const [bio, setBio ] = useState('')
  const [colors, setColors ] = useState('')
  const [rol, setRol ] = useState('')

  const [response, setResponse ] = useState('')
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
        <input value={photo} placeholder="photo" onChange={(e) => setPhoto(e.target.value)}></input>
        <input value={bio} placeholder="Bio" onChange={(e) => setBio(e.target.value)}></input>
        <input value={colors} placeholder="Colors" onChange={(e) => setColors(e.target.value)}></input>
        <input value={rol} placeholder="Colors" onChange={(e) => setRol(e.target.value)}></input>
        <button type='submit'>Create</button>
      </form>
      <div style={{ height: '100vh' }}>

<iframe srcDoc={response} title={"test"} style={{ width: '100%', height: '100%' }}/>
</div>
    </div>
  );
}

export default App;
