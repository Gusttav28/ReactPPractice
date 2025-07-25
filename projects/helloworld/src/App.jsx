

import { TwitterCard } from "./TwitterFollowCard";

export function App() {
    const users = [
        {
            userName:'MiduDev',
            name:'Miguel',
            isFollowing:true
        },
        {
            userName:'Gusttav',
            name:'Gustavo',
            isFollowing:true
        },
        {
            userName:'Dani',
            name:'Dani',
            isFollowing:false
        },
        {
            userName:'Juan',
            name:'Juan Luis',
            isFollowing:false
        },
    ]
    return(
        <>
            <section>
                {
                    users.map(user => {
                        const {userName, name, isFollowing} = user
                        return(
                            <TwitterCard key={userName} userName={userName} isFollowing={isFollowing}>
                                {name}
                            </TwitterCard>
                            
                        )
                    })
                }
            </section>
        </>
    )
    
}

    