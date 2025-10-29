import router from "@/router.js";
import {settings} from "@/api/env.js";

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
}

export default new AuthService();