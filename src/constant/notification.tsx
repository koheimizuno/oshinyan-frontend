import { Store } from "react-notifications-component";

export const Notification = (type: string, message: string) => {
  switch (type) {
    case "success":
      return Store.addNotification({
        title: "成功!",
        message: message,
        type: "success",
        container: "top-right",
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    case "warning":
      return Store.addNotification({
        title: "警告!",
        message: message,
        type: "warning",
        container: "top-right",
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    case "error":
      return Store.addNotification({
        title: "失敗!",
        message: message,
        type: "danger",
        container: "top-right",
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
  }
};
