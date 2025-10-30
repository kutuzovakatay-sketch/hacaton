import router from "@/router.js";
import {settings} from "@/api/settings.js";

class AuthService {
    async login() {
        const token = localStorage.getItem("access_token");
        if (token && await this.validateToken(token)) {
            router.push('/interests');
            return;
        }
        window.location.href = settings.API_BASE_URL + '/auth/vk/login';
    }

    logout() {
        localStorage.removeItem('access_token');
        router.push('/');
    }

    async validateToken(token) {
        try {
            const authToken = token || localStorage.getItem('access_token');
            if (!authToken) {
                return false;
            }

            let response = await fetch(settings.API_BASE_URL + '/auth/validate', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });

            return response.status === 200;
        } catch (error) {
            console.error('Token validation error:', error);
            this.logout();
            return false;
        }
    }

    async tokenIsValid() {
        const token = localStorage.getItem('access_token');
        return !(!token || !(await this.validateToken(token)));
    }

    async getUserData() {
        const token = localStorage.getItem('access_token');
        if (!token || !(await this.validateToken(token))) {
            router.push('/');
            throw new Error('Токен недействителен');
        }

        const response = await fetch(settings.API_BASE_URL + '/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Ошибка получения информации о пользователе:', errorData);
            throw new Error(errorData?.detail || `Не удалось получить информацию о пользователе - статус: ${response.status}`);
        }

        return response.json();
    }
}

export default new AuthService();