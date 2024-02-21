import { Injectable } from '@angular/core';
import { BillingDocument } from '../models/document';
import { PaymentDocumet } from '../models/payment-document';

@Injectable({
  providedIn: 'root',
})
export class DocumentServiceService {
  documents: BillingDocument[] = [
    {
      id: 1,
      name: 'document name1',
      author: 'author info1',
      createdDate: new Date(),
      paymentInfo: 'payment info1',
    },
    {
      id: 2,
      name: 'document name2',
      author: 'author info2',
      createdDate: this.addDays(new Date(), 4),
      paymentInfo: 'payment info2',
    },
    {
      id: 3,
      name: 'document name3',
      author: 'author info3',
      createdDate: this.addDays(new Date(), 2),
      paymentInfo: 'payment info3',
    },
  ];

  constructor() {}

  get GetPaymentDocuments():PaymentDocumet[]{
    return this.convertToPaymentDocument(this.documents);
  }


  convertToPaymentDocument(documents:BillingDocument[]):PaymentDocumet[]{
    return documents.map(a=>{
      const result = new PaymentDocumet();
      result.documentId = a.id;
      result.documentName = a.name;
      result.author = a.author;
      result.amount = 0;
      result.createdDate = a.createdDate;
      return result;
    });

  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}
