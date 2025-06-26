// utils/auth.js
import { jwtDecode } from 'jwt-decode';


export const isTokenValid = () => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) return false;

        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        return !isExpired;
    } catch (error) {
        return false;
    }
};

export const getUserRoleFromToken = () => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) return null;

        const decoded = jwtDecode(token);
        return decoded.role || null;
    } catch (error) {
        return null;
    }
};
