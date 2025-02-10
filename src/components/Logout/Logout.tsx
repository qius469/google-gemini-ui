import { useDispatch } from 'react-redux'
import { clearUser } from '../../store/user/userSlice'
import Button from '../Button'

function Logout () {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(clearUser())
    }
    return (
        <Button onClick={handleLogout}>登出</Button>
    )
}

export default Logout
