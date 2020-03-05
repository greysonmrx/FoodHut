import React, { useState } from "react";
import { MdNotifications } from "react-icons/md";

import {
  Container,
  Badge,
  Content,
  NotificationList,
  Header,
  Scroll,
  Notification,
  NoNotificationContent
} from "./styles";

import NoNotifications from "../../assets/no-notifications.svg";

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#616161" size={25} />
      </Badge>
      <Content visible={visible}>
        <Header>
          <span>Notificações</span>
        </Header>
        <NotificationList>
          <Scroll>
            {notifications.map(notification => (
              <Notification key={notification._id} unread={!notification.read}>
                <img
                  src={`https://api.adorable.io/avatar/30/${notification.user}.png`}
                  alt={notification.user}
                />
                <div>
                  <span>{notification.user}</span>
                  <p>{notification.content}</p>
                  <time>{notification.timeDistance}</time>
                  <button type="button">Marcar como lida</button>
                </div>
              </Notification>
            ))}
            {notifications.length === 0 ? (
              <NoNotificationContent>
                <img src={NoNotifications} alt="Nenhuma notificação" />
                <span>Nenhuma notificação ainda :(</span>
              </NoNotificationContent>
            ) : null}
          </Scroll>
        </NotificationList>
      </Content>
    </Container>
  );
}
