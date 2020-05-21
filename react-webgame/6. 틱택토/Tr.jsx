import React, {memo, useMemo} from 'react';
import Td from './Td';

const Tr = memo(({dispatch, rowData, rowIndex}) => {
    console.log('tr render');
    return(
        <tr>
            {Array(rowData.length).fill().map((td,i) => (
                useMemo(() => 
                    <Td key={i} dispatch={dispatch} cellData={rowData[i]} rowIndex={rowIndex} cellIndex={i}>{' '}</Td>
                , [rowData[i]]
                )
            ))}
        </tr>
    );
});

export default Tr;