import React from "react";
import { ClassCounter } from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';

export default function CounterApp(){
    return(<div>
        <FunctionalCounter/>
        <ClassCounter/>
    </div>
    )
}