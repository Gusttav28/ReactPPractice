

import { TwitterCard } from "./TwitterFollowCard";

export function App() {
    const gustavo = {isFollowing: true, userName:'Gusttav'}
    return(
        <>
            <TwitterCard isFollowing userName="MiduDev">
                Miguel
            </TwitterCard>
            <TwitterCard  {... gustavo}>
                Gustavo
            </TwitterCard>
            <TwitterCard  isFollowing={false} userName="Dani" >
                Dani
            </TwitterCard>
        </>
    )
    
}

    