import { COLORS } from "../constants"

export const Loader = () => {
    return (<div className='m-auto text-center loader'>
        <div className="spinner-border" style={{ color: COLORS.primary }} role="status">
            <span className="visually-hidden ">Loading...</span>
        </div>
    </div>)
}