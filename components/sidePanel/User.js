import React from "react"

const User = () => {

    let cost = 0
    let id = 0

    const user = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            middlename: 'Aloh',
            age: 40,
            walletId: 5469380071124719,
            balance: cost,
            state: "Working"
        }
    ]

    return (
      <div className="user">
        <ul>
            <img src="bb.jpg" width="150" height="150"/>
            <li>
                <h3>{user[id].lastname} {user[id].firstname} {user[id].middlename}</h3>
            </li>
            <li>
                <h3>Номер кошелька: {user[id].walletId}</h3>
            </li>
            <li>
                <h3>Баланс: {user[id].balance}</h3>
            </li>
            <li>
                <h3>Статус: {user[id].state}</h3>
            </li>
        </ul>
      </div>
    )
}

export default User