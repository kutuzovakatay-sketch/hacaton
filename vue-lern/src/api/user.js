import router from "@/router.js";
import {settings} from "@/api/settings.js";
import AuthService from "@/api/auth.js";

class UserService {
    async getCategories() {
        const token = localStorage.getItem('access_token');
        if (!token || !(await AuthService.tokenIsValid())) {
            router.push('/');
            throw new Error('Токен недействителен');
        }

        console.log('Запрос категорий:', settings.API_BASE_URL + '/categories');
        const response = await fetch(settings.API_BASE_URL + '/categories', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Статус ответа категорий:', response.status);

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Ошибка получения категорий:', errorData);
            throw new Error(errorData?.detail || `Не удалось получить категории - статус: ${response.status}`);
        }

        const data = await response.json();
        console.log('Полученные категории с сервера:', data);
        return data;
    }

    async sendCategoriesToServer(selectedInterests) {
        if(!selectedInterests || selectedInterests.length === 0){
            throw new Error('Вы не выбрали ваши интересы!');
        }

        const token = localStorage.getItem('access_token');
        if (!token || !(await AuthService.tokenIsValid())) {
            router.push('/');
            throw new Error('Токен недействителен');
        }

        const bodyUrl = settings.API_BASE_URL + '/user/interests';

        let response = await fetch(bodyUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedInterests)
        });

        console.log('Статус ответа (body array):', response.status);


        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Ошибка сервера:', errorData);
            throw new Error(errorData?.detail || `Не удалось отправить интересы на сервер - статус: ${response.status}`);
        }

        return response;
    }

    async getUserData() {
        const token = localStorage.getItem('access_token');
        if (!token || !(await AuthService.tokenIsValid())) {
            router.push('/');
            throw new Error('Токен недействителен');
        }

        const response = await fetch(settings.API_BASE_URL + '/user/me', {
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

    async getUserCategories() {
        const token = localStorage.getItem('access_token');
        if (!token || !(await AuthService.tokenIsValid())) {
            router.push('/');
            throw new Error('Токен недействителен');
        }

        const response = await fetch(settings.API_BASE_URL + '/user/categories', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.detail || `Не удалось получить интересы пользователя - статус: ${response.status}`);
        }
        return await response.json();
    }

    async getUserRoutes() {
        const token = localStorage.getItem('access_token');
        if (!token || !(await AuthService.tokenIsValid())) {
            router.push('/');
            throw new Error('Токен недействителен');
        }

        const response = await fetch(settings.API_BASE_URL + '/user/routes', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.detail || `Не удалось получить маршруты пользователя - статус: ${response.status}`);
        }
        return await response.json();
    }

}

export default new UserService();