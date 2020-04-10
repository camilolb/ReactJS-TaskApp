
import React from 'react'

export const TaskBanner  = props => (
    
     <h4 className="bg-primary text-white text-center p-4">
      Hola! {props.userName} tienes {props.taskItems.filter(x => !x.done).length} tareas pendientes</h4>

)
