import AuthService from "@/api/auth.js";
import {settings} from "@/api/settings.js";

class RouteService {

    async getAddressByCoordinates(lat, lon) {
        const token = localStorage.getItem('access_token');
        if (!token || !(await AuthService.tokenIsValid())) {
            throw new Error('Токен недействителен');
        }

        const response = await fetch(`${settings.API_BASE_URL}/routes/geocode?latitude=${lat}&longitude=${lon}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Ошибка получения адреса:', errorData);
            throw new Error(errorData?.detail || `Не удалось получить адрес - статус: ${response.status}`);
        }

        const result = await response.json()

        console.log(result)

        return result.results.items[0].address_name;
    }


    async createRouteTask(routeData) {
        const token = localStorage.getItem('access_token');
        if (!token || !(await AuthService.tokenIsValid())) {
            throw new Error('Токен недействителен');
        }

        const response = await fetch(settings.API_BASE_URL + '/routes/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(routeData)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Ошибка создания задачи маршрута:', errorData);
            throw new Error(errorData?.detail || `Не удалось создать задачу маршрута - статус: ${response.status}`);
        }

        return await response.json();
    }
}

export default new RouteService();