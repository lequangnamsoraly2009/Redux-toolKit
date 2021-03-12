import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeColor,selectColor} from './randomColorSlice';

export function RandomColor() {
    const newColor = useSelector(selectColor);
    const dispatch = useDispatch();
  
    return (
      <div>
        <div>
          <button
            aria-label="Change Color"
            onClick={() => dispatch(changeColor())}
          >
           Change
          </button>
          <div style={{backgroundColor: newColor, width:'400px',height:'400px',margin: '50px auto',borderRadius:'5px'}}>      
          </div>
        </div>
      </div>
    )
  };
  