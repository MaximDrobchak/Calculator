import React from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '../components/input';
import Paper from '../components/paper';

import { useFormInput } from '../components/functions';

function Step3 (){
  const cost = useFormInput('');
  const brocker = useFormInput('');
  const comision = useFormInput('');
  const sertificate = useFormInput('');
  const expenses = useFormInput('');

  window.localStorage.setItem('cost', cost.value);
  window.localStorage.setItem('brocker', brocker.value);
  window.localStorage.setItem('comision', comision.value);
  window.localStorage.setItem('sertificate', sertificate.value);
  window.localStorage.setItem('expenses', expenses.value);
  return (
    <div style={{ maxWidth: 350 }}>
      <Typography variant='display1'>Затраты</Typography>
      <Paper>
        <Input placeholder='Введите цену' {...cost} />
        <Input placeholder='Экспедиционные и брокерские услуги' {...brocker} />
        <Input placeholder='Комиссия дилера' {...comision} />
        <Input placeholder='Сертификация' {...sertificate} />
        <Input placeholder='Дополнительные расходы' {...expenses} />
      </Paper>
    </div>
  );
}

export default Step3;
