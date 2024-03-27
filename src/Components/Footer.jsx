import React from 'react'
import Footercontent from './Footercontent'

let title1 = "About Us";
let aboutA1 = "At Climb Infra we understand your key concerns. This is why we are here.";
let aboutA2 = "For us, it matters a lot, whether we are in a position to help you out, when it comes to locating property (residential/commercial/rent/lease) that fulfills all your prerequisites."

let aboutA3 = "property (residential/commercial/rent/lease) that fulfills all your prerequisites";

let title2 = "Useful Links";
let aboutB1 = "home";
let aboutB2 = "about";
let aboutB3  = "Residential Property";


let array = [{title:title1
        ,aboutA:aboutA1
        ,aboutB:aboutA2
        ,aboutC:aboutA3
                },
                {title:title2
                        ,aboutA:aboutB1
                        ,aboutB:aboutB2
                        ,aboutC:aboutB3
         },
         {title:title2
                 ,aboutA:aboutB1
                 ,aboutB:aboutB2
                 ,aboutC:aboutB3
  },
  {title:title2
          ,aboutA:aboutB1
          ,aboutB:aboutB2
          ,aboutC:aboutB3
}
        
        
        ];


export default function Footer() {
  return (
    <div className='flex justify-between'>

<Footercontent/>
<Footercontent/>
<Footercontent/>
<Footercontent/>
                {/* {
                        array.map(ele=> <Footercontent title={ele.title} aboutA={ele.aboutA} aboutB={ele.aboutB} aboutC={ele.aboutC} />)
                } */}
 </div>
  )
}
