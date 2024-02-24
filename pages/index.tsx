import { Rectangle } from '@/components/Rectangle'
import Square from '@/components/Square'
import React from 'react'

const index = () => {
  return (
    <div className="main">
      
      <div className="container-top">

        <div className="row">
          <Rectangle />
          <Rectangle />
        </div>

        <div className="row">
          <Rectangle />
          <Rectangle />
        </div>

      </div>

      <div className="container-bottom">

        <div className="square-row">
          <Square boxName='Caja 0.0'/>
          <Square boxName='Caja 0.1'/>
          <Square boxName='Caja 0.2'/>
        </div>

        <div className="square-row">
          <Square boxName='Caja 1.0'/>
          <Square boxName='Caja 1.1'/>
          <Square boxName='Caja 1.2'/>
        </div>

        <div className="square-row">
          <Square boxName='Caja 2.0'/>
          <Square boxName='Caja 2.1'/>
          <Square boxName='Caja 2.2'/>
        </div>
        

      </div>

    </div>
  )
}

export default index