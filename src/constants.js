import { Alert } from 'react-bootstrap';
export const FULL_MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
export const COLORS = {
    primary: '#7575dd',
    light_primary: '#A5A5DD',
    text_light: '#849095',
    text: '#272727',
    danger: '#CC397B'
}

export const availible = [{
    date: '10.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '11.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '15.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '16.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },{
    date: '17.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },{
    date: '18.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '19.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '20.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '27.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '28.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '29.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '3.6.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '5.6.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '8.6.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '13.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '14.5.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '19.6.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  {
    date: '20.6.2023',
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  }]
  

export const ErrorMsg = ({ setState, state }) => {
    setTimeout(() => setState(p => ({ ...p, errorMsg: '' })), 3000)
    return (
        <div className='position-fixed' style={{ width: '200px', top: '10px', right: '10px', zIndex: '999999' }}>
            <Alert show={state.errorMsg !== ''} variant="danger" onClose={() => setState(p => ({ ...p, errorMsg: '' }))} dismissible>
                <Alert.Heading>Ошибка</Alert.Heading>
                <p>
                    {state.errorMsg}
                </p>
            </Alert>
        </div>
    )
} 

export const SuccessMsg = ({ setState, state }) => {
    setTimeout(() => setState(p => ({ ...p, successMsg: '' })), 3000)
    return (
        <div className='position-fixed' style={{ width: '200px', top: '10px', right: '10px', zIndex: '999999' }}>
            <Alert show={state.successMsg !== ''} variant="success" onClose={() => setState(p => ({ ...p, successMsg: '' }))} dismissible>
                <Alert.Heading>Success!</Alert.Heading>
                <p>
                    {state.successMsg}
                </p>
            </Alert>
        </div>
    )
}