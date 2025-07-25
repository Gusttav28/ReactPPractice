import { useState } from 'react'


export function TwitterCard({userName = 'unknow', children, initialisFollowing}) {
    const [isFollowing, setFollowing] = useState(initialisFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'unfollow' : 'following'

    const handleButton = () => {
        setFollowing(!isFollowing)
    }
    return(
        <article>
         <header>
             <img src={`https://unavatar.io/${userName}`} alt="el avatar de midu dev" />
             <div>
                 <strong>
                    {children}
                 </strong>
                 <span>@{userName}</span>
             </div>
         </header>
         <aside>
             <button className={buttonClass} onClick={handleButton}>
                {text}
             </button>
         </aside>
        </article>
     )
}