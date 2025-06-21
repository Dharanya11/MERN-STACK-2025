import React from 'react'
import { Link } from 'react-router-dom'
const Hooks = () => {
    return (
        <center><div style={{ display: 'flex', flexDirection: 'column', background: 'pink', padding: '20px', width: '300px', marginTop: '250px', border: '2px solid black' }}>
            <button style={{ backgroundColor: 'gray', color: 'white', padding: '10px', marginBottom: '10px', border: 'none', borderRadius: '5px' }}>
                <Link to='/state' style={{ textDecoration: 'none', color: 'white' }}>useState</Link>
            </button>
            <button style={{ backgroundColor: 'lightgreen', color: 'black', padding: '10px', border: 'none',marginBottom: '10px', borderRadius: '5px' }}>
                <Link to='/effect' style={{ textDecoration: 'none', color: 'black' }}>useEffect</Link>
            </button>
            <br></br>
            <button style={{ backgroundColor: 'blue', color: 'black', padding: '10px', border: 'none', borderRadius: '5px',marginBottom: '10px' }}>
                <Link to='/ref' style={{ textDecoration: 'none', color: 'black' }}>useRef</Link>
            </button>
            <br></br>
            <button style={{ backgroundColor: 'sandle', color: 'black', padding: '10px', border: 'none', borderRadius: '5px',marginBottom: '10px' }}>
                <Link to='/reducer' style={{ textDecoration: 'none', color: 'black' }}>Reducer</Link>
            </button>
        </div></center>
    )
}

export default Hooks