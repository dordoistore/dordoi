import {notification} from "antd";

export const openNotification = () => {
    notification.config({
        placement: 'topRight',
    });

    notification.success({
        message: 'Готово',
        description: 'Операция выполнена успешно',
    });
};