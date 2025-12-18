import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'



const App = () => {
  const users=[
    {
     img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
     intro:'',
     color:'royalblue',
     tag:'Satisfied' 
    },
    {
      img:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     color:'lightseagreen',
     tag:'Underserved' 
    },
    {
      img:'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     color:'pink',
     tag:'Underbanked' 
    },
    {
      img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     color:'black',
     tag:'Unreserved' 
    },
     {
      img:'https://plus.unsplash.com/premium_photo-1661754851683-634176993bd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     color:'lightblue',
     tag:'Working' 
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}

export default App
 