import React from 'react'

export default function ludo() {
    const [count, setCount] = useState({
        left:1,
        right:1,
        up:1,
        down:1,
    })
  

    const handleClick = ()=>{
        let update = {...count}
        update.left+=1
        
        }

    return (
    <div>
        <button>
        left
        </button>
        <button>
            right
        </button>
        <button>
            up
        </button>
        <button>
            down
        </button>
    </div>
  )
}
