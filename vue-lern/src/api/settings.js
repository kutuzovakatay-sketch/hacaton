class Settings {
    //Зачем ты это опять сделал храни письку в env
    API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://piska.kurays.dev/api';
}

const settings = new Settings();

export {settings};
