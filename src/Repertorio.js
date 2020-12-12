import React from 'react'
import Card from './Card'
import useAPI from './useAPI'

export default function Repertorio() {
    const {datos} = useAPI('https://jsonplaceholder.typicode.com/users');
    return (
        <div class='main-content'>
            <h2 className='main-title'>Repertorio</h2>
            {
                datos.map(item => (
                    <Card name={item.name}
                    username={item.username}
                    email={item.email} />
                ) )
            }
        </div>
    )
}



