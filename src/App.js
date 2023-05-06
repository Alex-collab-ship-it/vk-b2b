import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Schedule } from './components/Schedule';
import { COLORS, ErrorMsg, availible } from './constants';

function App() {
  const [state, setState] = useState({
    tower: 'Выберите...',
    floor: 'Выберите...',
    apartment: 'Выберите...',
    dateModalShown: false,
    date: 'Выберите...',
    start_time: 'Выберите...',
    end_time: 'Выберите...',
    comment: '',
    errorMsg: '',
    successMsg: ''
  })
  document.title = 'Выбрать помещение'
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-3' style={{ width: '100%', minHeight: '100vh'}}>
        { state.errorMsg !== '' && <ErrorMsg state={state} setState={setState} />}
        <SelectDateModal state={state} setState={setState} />
        <p className='fs-2 mb-5'>Забронировать переговорную</p>
        <form className='d-flex flex-column' style={{ width: '100%', maxWidth: '700px'}}>
          <div className='row'>

            <div style={{ minWidth: '150px' }} className='col-3'>
                <label  className="ms-3 position-absolute">
                    <span className="h6 small bg-white text-muted px-1">Башня</span>
                </label>
                <select className='form-select form-control p-3' style={{ marginTop: '12px' }} onChange={e => setState(p => ({ ...p, tower: e.target.value }))}>
                  <option>Выберите...</option>
                  <option>A</option>
                  <option>Б</option>
                </select>
            </div>

            <div style={{ minWidth: '150px' }} className='col-3'>
                <label  className="ms-3 position-absolute">
                    <span className="h6 small bg-white text-muted px-1">Этаж</span>
                </label>
                <select className='form-select form-control p-3' style={{ marginTop: '12px' }} onChange={e => setState(p => ({ ...p, floor: e.target.value }))}>
                  <option>Выберите...</option>
                  {[...Array(25).keys()].map((el, i) => <option key={i}>{el+3}</option>)}
                </select>
            </div>

            <div style={{ minWidth: '100px' }} className='col-6'>
                <label  className="ms-3 position-absolute">
                    <span className="h6 small bg-white text-muted px-1">Переговорка</span>
                </label>
                <select className='form-select form-control p-3' style={{ marginTop: '12px' }} onChange={e => setState(p => ({ ...p, apartment: e.target.value }))}>
                  <option>Выберите...</option>
                  {[...Array(10).keys()].map((el, i) => <option key={i}>Переговорка {el+1}</option>)}
                </select>
            </div>
          </div>

          <div>
              <label  className="ms-3 position-absolute">
                  <span className="h6 small bg-white text-muted px-1">Дата</span>
              </label>
              <div className='form-control p-3' style={{ marginTop: '12px' }} onClick={() => setState(p => ({ ...p, dateModalShown: true }))}><p>{ state.date + (state.end_time !== 'Выберите...' ? (', ' + state.start_time + ' - ' + state.end_time) : '')}</p></div>
          </div>
          <div>
              <label  className="ms-3 position-absolute">
                  <span className="h6 small bg-white text-muted px-1">Комментарий</span>
              </label>
              <textarea className='form-control p-3' style={{ marginTop: '12px' }} onChange={e => setState(p => ({ ...p, comment: e.target.value }))} />
          </div>
          <div className='d-flex flex-row justify-content-md-end flex-wrap mt-4'>
            <button className='btn btn-md me-2 mb-2 primary' type="button" onClick={() => {
              console.log(JSON.stringify({ tower: state.tower, floor: state.floor, apartment: state.apartment,date: state.date,
                start_time: state.start_time,
                end_time: state.start_time,
                comment: state.comment
              }))
                setState(p => ({ ...p, dateModalShown: false, successMsg: 'Отправлено!' }))
              }}
              style={{ backgroundColor: COLORS.primary, color: 'white', height: '50px' }}>Отправить</button>
            <button className='btn btn-md mb-2' type="button" onClick={() => setState({
                  tower: 'Выберите...',
                  floor: 'Выберите...',
                  apartment: 'Выберите...',
                  dateModalShown: false,
                  date: 'Выберите...',
                  start_time: 'Выберите...',
                  end_time: 'Выберите...',
                  comment: '',
                  errorMsg: '',
                  successMsg: 'Очищено!'
                })
              }
              style={{ backgroundColor: COLORS.danger, color: 'white', height: '50px' }}>Очистить</button>
          </div>
        </form>
    </div>
  );
}

const SelectDateModal = ({ state, setState }) => {
  const selectDate = date => setState(p => ({ ...p, date: date, start_time: 'Выберите...', end_date: 'Выберите...' }))
  return <Modal centered contentClassName='border-0 rounded-4 rounded-md-5 px-sm-4 px-3 py-4' size='lg' show={state.dateModalShown} onHide={() => setState(p => ({ ...p, dateModalShown: false }))}>
    <div className='row'>
      <div className='col-lg-9'>
        <Schedule selectDate={selectDate} selectedDate={state.date} />
      </div>
        <div className='col d-flex flex-lg-column flex-row flex-wrap justify-content-between'>
          <div className='d-flex flex-row flex-wrap mb-2'>
            <div style={{ minWidth: '150px' }} className='mx-2'>
                <label  className="ms-3 position-absolute">
                    <span className="h6 small bg-white text-muted px-1">Начало</span>
                </label>
                <select className='form-select form-control p-3' style={{ marginTop: '12px' }} onChange={e => setState(p => ({ ...p, start_time: e.target.value }))} disabled={state.date ==='Выберите...'}>
                  <option>Выберите...</option>
                  {state.date !=='Выберите...' && availible.filter(el => el.date === state.date)[0].time.slice(0,-1).map((el, i) => <option key={i}>{el}</option>)}
                </select>
            </div>
            <div style={{ minWidth: '150px' }} className='mx-2'>
                <label  className="ms-3 position-absolute">
                    <span className="h6 small bg-white text-muted px-1">Конец</span>
                </label>
                <select className='form-select form-control p-3' style={{ marginTop: '12px' }} onChange={e => setState(p => ({ ...p, end_time: e.target.value }))} disabled={state.start_time ==='Выберите...'}>
                  <option>Выберите...</option>
                  {state.date !=='Выберите...' && availible.filter(el => el.date === state.date)[0].time
                    .map((el, i) =>  parseInt(el.slice(0,2)) > parseInt(state.start_time.slice(0,2)) ? <option key={i}>{el}</option> : <></>)}
                </select>
            </div>
          </div>
          <button className='btn btn-md mt-auto mx-2 mb-2 primary' onClick={() => setState(p => ({ ...p, dateModalShown: false, successMsg: 'Сохранено!' }))}
            style={{ backgroundColor: COLORS.primary, color: 'white', height: '50px' }} disabled={state.end_time === 'Выберите...'}>Сохранить</button>
        </div>
      </div>
  </Modal>
}

export default App;
