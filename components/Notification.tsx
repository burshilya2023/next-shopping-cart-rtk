import { Button, notification } from "antd";
import React from "react";

export const openNotification = (title: string, toMovie: string) => {
  notification.open({
    message: `add to ${toMovie}`,
    description: `pizza ${title} added`,
    // onClick: () => {
    //   console.log("Notification Clicked!");
    // },
  });
};
type NotificationType = "success" | "info" | "warning" | "error";

export const openNotificationWithIcon = (
  type: NotificationType,
  title: string,
  toMovie: string
) => {
  notification[type]({
    message: `add to ${toMovie}`,
    description: `pizza ${title} added`,
  });
};
