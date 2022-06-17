import useAuth from "../hooks/auth";

export default function Logout() {
    const { signout } = useAuth();
    return signout();
}