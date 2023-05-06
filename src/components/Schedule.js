import { useEffect, useState } from 'react';
import { COLORS, ErrorMsg, FULL_MONTHS, availible as data } from '../constants';
import { ReactComponent as ArrowLeft } from '../icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg';
import { Loader } from './Loader';


export const Schedule = ({ selectDate, selectedDate }) => {
    const datesArray = data.map(el => el.date)
    const [state, setState] = useState({
        current: {
            year: 0,
            month: 0,
            day: 0,
        },
        selected: {
            year: 0,
            month: 0,
            day: 0
        },
    })
    useEffect(() => {
        fetch('https://worldtimeapi.org/api/timezone/Europe/Moscow').then(r => r.json())
            .then(r => setState(p => ({ ...p, current: {
                year: new Date(r.datetime).getFullYear(),
                month: new Date(r.datetime).getMonth() + 1,
                day: new Date(r.datetime).getDate(),
            }, selected: {
                year: new Date(r.datetime).getFullYear(),
                month: new Date(r.datetime).getMonth() + 1,
        }}) )).catch(e => { setState(p => ({ ...p, errorMsg: 'Не удалось загрузить текущее время' })); console.log(e)})
    }, [])
    return state.current.month === 0 ? <Loader /> :
        <div className="d-flex flex-column rounded-4 p-4 h-100" style={{ border: '1px solid #D0D0D0' }}>
            { state.errorMsg ? <ErrorMsg state={state} setState={setState} /> : <></> }
            <div className="d-flex flex-row mb-4">
                <p className="me-auto" style={{ fontSize: '22px' }}>{ FULL_MONTHS[state.selected.month-1] + ' ' +  state.selected.year}</p>
                <div className="d-flex flex-row my-auto">
                    <ArrowLeft cursor='pointer' className='me-5' fill={state.current.month === state.selected.month ? '#B4B4B4' : COLORS.primary}
                        onClick={() => setState(p => {
                            let [newMonth, newYear] = lowerMonth(p.current.month, p.current.year, p.selected.month, p.selected.year)
                            return { ...p, selected: { ...p.selected,
                                month: newMonth,
                                year: newYear
                            }}
                        })}/>
                    <ArrowRight cursor='pointer' onClick={() => setState(p => ({ ...p, selected: { ...p.selected,
                            year: p.selected.month + 1 === 13 ? p.selected.year + 1 : p.selected.year,
                            month: p.selected.month + 1 === 13 ? 1 : p.selected.month + 1,
                        }
                        }))} />
                </div>
            </div>

            <div className="row cols-7 flex-nowrap">
                <div className='col text-center px-0'><p>пн</p></div>
                <div className='col text-center px-0'><p>вт</p></div>
                <div className='col text-center px-0'><p>ср</p></div>
                <div className='col text-center px-0'><p>чт</p></div>
                <div className='col text-center px-0'><p>пт</p></div>
                <div className='col text-center px-0'><p>сб</p></div>
                <div className='col text-center px-0'><p>вс</p></div>
            </div>
            <div className='row h-100'>
                {(new Date( state.selected.year, state.selected.month-1 ,1)).getDay() !== 0 ?
                    [...Array((new Date( state.selected.year, state.selected.month-1 ,1)).getDay()-1).keys()].map((d,i) => <div className='col text-center' style={{ minWidth: 'calc(100%/7)' }} key={i}><p></p></div>)
                        : <></>}
                {[...Array(daysInMonth(state.selected.month, state.selected.year)).keys()].map((d, i) => {
                    let thisDate = [i+1, state.selected.month, state.selected.year].join('.')
                    return <div className='d-flex align-items-end px-0 mb-2' style={{ width: '14.2857143%' }} key={i}>
                        <p onClick={() => datesArray.indexOf(thisDate) >= 0 && selectDate(thisDate)} className='m-auto d-flex align-items-center justify-content-center rounded-3'
                            style={{ width: '35px', height: '35px', color: datesArray.indexOf(thisDate) < 0 ?  COLORS.text_light : '#fff',
                                cursor: datesArray.indexOf(thisDate) < 0 ? 'auto' : 'pointer', backgroundColor: thisDate === selectedDate ? COLORS.primary : (datesArray.indexOf(thisDate) < 0 ? '' : COLORS.light_primary) }}>{i+1}</p>
                    </div>
                })}
            </div>
        </div>
}

function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
    return new Date(year, month, 0).getDate();
}

function lowerMonth(cMonth, cYear, selMonth, selYear) {
    if (cMonth === selMonth){
        if (cYear === selYear){
            return [selMonth, selYear]
        }
        selMonth -= 1
        if (selMonth === 1) {
            selYear -= 1
            selMonth = 12
        }
        return [selMonth, selYear]
    } else if (selMonth === 1) {
        selYear -= 1
        selMonth = 13
    }
    return [selMonth-1, selYear]
}