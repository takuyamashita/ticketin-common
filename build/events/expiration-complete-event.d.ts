import { Subjects } from './subjects';
export interface ExpirationCompleteEvent {
    subject: Subjects.Expiration;
    data: {
        orderId: string;
    };
}
