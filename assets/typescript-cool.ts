type notificationType = 'error' | 'success';

interface INotificationParams {
  timeout?: number;
  message: string;
  type: notificationType;
}