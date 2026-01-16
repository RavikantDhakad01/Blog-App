import authService from '../../appwrite/auth'
import { logout } from '../../store/authslice'
import { useDispatch } from 'react-redux'

function LogoutBtn() {

    const dispatch = useDispatch()

    function logoutHandler() {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button onClick={logoutHandler} className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Logout
        </button>
    )
}
export default LogoutBtn