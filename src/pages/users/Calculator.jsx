import React from 'react'

const Calculator = () => {
    const [value, setValue] = React.useState('');
 const clickHanle = (btn) => {

    if (btn === '=') {
      try {
        const result = eval(value);
        setValue(result.toString());
      } catch {
        setValue('Error');
      }
    }
    else if (btn === 'C') {
      setValue('');
    }
    else {
      setValue(value + btn); // append
    }
  }
    return (
        <div>
            <div className='m-4 flex justify-center p-9'>
                <table>
                    <thead>
                        <tr>
                            <th>Calculator Page</th>
                            <input value={value} className='border'/>
                        </tr>
                        <tr>
                            <div>
                                <td> <button onClick={() => clickHanle(7)} className='p-3'></button>7</td>
                                <td> <button onClick={() => clickHanle(8)} className='p-3'></button>8</td>
                                <td> <button onClick={() => clickHanle(9)} className='p-3'></button>9</td>
                                <td> <button onClick={() => clickHanle('/')} className='p-3'></button>/</td>
                            </div>
                            <div>
                                <td> <button onClick={() => clickHanle(4)} className='p-3'></button>4</td>
                                <td> <button onClick={() => clickHanle(5)} className='p-3'></button>5</td>
                                <td> <button onClick={() => clickHanle(6)} className='p-3'></button>6</td>
                                <td> <button onClick={() => clickHanle('*')} className='p-3'></button>*</td>
                            </div>
                            <div>
                                <td> <button onClick={() => clickHanle(1)} className='p-3'></button>1</td>
                                <td> <button onClick={() => clickHanle(2)} className='p-3'></button>2</td>
                                <td> <button onClick={() => clickHanle(3)} className='p-3'></button>3</td>
                                <td> <button onClick={() => clickHanle('-')} className='p-3'></button>-</td>
                            </div>
                            <div>
                                <td> <button onClick={() => clickHanle(0)} className='p-3'></button>0</td>
                                <td> <button onClick={() => clickHanle('.')} className='p-3'></button>.</td>
                                <td> <button onClick={() => clickHanle('=')} className='p-3'></button>=</td>
                                <td> <button onClick={() => clickHanle('+')} className='p-3'></button>+</td>
                            </div>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Calculator