import React from 'react';
import Typography from '@material-ui/core/Typography';

import PaperResult from '../components/result';
import Paper from '../components/paper';

function Result (props){
  return (
    <div>
      <Typography variant='display1'>Результат</Typography>
      <Paper>
        <PaperResult label='Комиссия аукциона' value={0} />
        <PaperResult label='Цена лота всего' value={0} />
        <PaperResult label='Таможенные платежи всего' value={0} />
        <PaperResult label='Итого' value={0} />
        <PaperResult label='Цена доставки до порта Одесса' value={0} />
        <PaperResult
          label='Дополнительная комиссия (Сублот +100, AL,MI,WI+200. Bill of sale +200)'
          value={0}
        />
        <PaperResult label='Страховка' value={0} />
        <PaperResult
          label='Таможенная стоимость (стоимость лота +$400)'
          value={0}
        />
      </Paper>
    </div>
  );
}

export default Result;
