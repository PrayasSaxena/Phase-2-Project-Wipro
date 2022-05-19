import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/ToAll/Models/Cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  buttonColor = "black";
  buttonType = "buy";
  isCustomSize = false;
  buttonWidth = 300;
  buttonHeight = 50;
  isTop = window === window.top;

  paymentRequest: google.payments.api.PaymentDataRequest= {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "1000.00",
      currencyCode: "INR",
      countryCode: "IND"
    }
  };

  onLoadPaymentData(event:any) {
    console.log("load payment data", event.detail);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
