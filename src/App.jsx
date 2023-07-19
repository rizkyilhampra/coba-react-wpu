// import { useState } from 'react'
import { useState } from "react";
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click Me
            </button>
            <p>Anda telah menekan tombol sebanyak {count} kali</p>
        </>
    );
}

export default App;
