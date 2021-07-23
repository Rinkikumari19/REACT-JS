import React from 'react'

function CardsMap() {
    const items = [{name:"Navgurukul",age:13,desc:"NGO(Non Government Organisation)",img:"https://content.jdmagicbox.com/comp/bangalore/w8/080pxx80.xx80.181203163638.t3w8/catalogue/navgurukul-bangalore-campus-huskur-bangalore-computer-training-insitutes-for-software-diploma-y2csavxaoh.jpg?clr=29333d"},{name:"komal Bhatt",age:23,desc:"Team member",img:"https://navgurukul.org/assets/img/main/komal.jpeg"},{name:"Rinki Kumari",age:20,desc:"Student",img:"https://miro.medium.com/fit/c/131/131/2*1r58hhUoCL2QGcJ5UqIC-A.png"}]
    return (
        <div>
            {
            items.map(item => (
                <h1> {item.name} <br />{item.age} <br />{item.desc} <br /><img style={{ width: '40%' }} src={item.img} /></h1>
                    ))
            }
        </div>
    )
}
export default CardsMap