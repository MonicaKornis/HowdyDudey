import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import $ from 'jquery';

class PayPalButton extends React.Component {
    constructor(props){
      super(props);
      this.sendInvoice = this.sendInvoice.bind(this);
    }

    sendInvoice() {
      let data = {
                  "merchant_info": {
                    "email": "merchant@example.com",
                    "first_name": "David",
                    "last_name": "Larusso",
                    "business_name": "Mitchell & Murray",
                    "phone": {
                      "country_code": "001",
                      "national_number": "4085551234"
                    }
                  },
                  "billing_info": [{
                    "email": "bill-me@example.com",
                    "first_name": "Stephanie",
                    "last_name": "Meyers"
                  }],
                  "items": [{
                    "name": "Zoom System wireless headphones",
                    "quantity": 2,
                    "unit_price": {
                      "currency": "USD",
                      "value": "120"
                    },
                    "tax": {
                      "name": "Tax",
                      "percent": 8
                    }
                  }],
                  "discount": {
                    "percent": 1
                  },
                  "shipping_cost": {
                    "amount": {
                      "currency": "USD",
                      "value": "10"
                    }
                  },
                  "note": "Thank you for your business.",
                  "terms": "No refunds after 30 days."
                }
    
      $.ajax({
        headers: {
           "Accept": "application/json",
           "Accept-Language": "en_US",
           "Authorization": "Basic A21AAHP2h1guke9MookjsHPT_-LywqaWaFdTukRDo6wgy2QdhdoTU515iklscA9leCHrvrb9bTigR3CCjunFP8oB2aUiDVdeg"
         },
       method: 'POST',
       beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer A21AAFGUNmUg2l9rWablcdlLDzH7OrWfPMlAHFGj5jDlaLe_wx8oSTBkKqntTB_1ZdoNUXvk9s_NdPegU9_0CkioinrTxIfbw');
      },
       url: `https://api.sandbox.paypal.com/v1/invoicing/invoices/`,
       headers: '',
       data: JSON.stringify(data),
       contentType: "application/x-www-form-urlencode",
       success: () => {console.log('it worked')},
       error: () => {console.log('it failed')},
     })
    }

    render() {
		const onSuccess = (payment) => {
			// 1, 2, and ... Poof! You made it, everything's fine and dandy!
                this.sendInvoice();
            		console.log("Payment successful!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		}
    let message = console.log('it worked!');

		const onCancel = (data) => {
			// The user pressed "cancel" or closed the PayPal popup
			console.log('Payment cancelled!', data);
      this.props.history.push('/5');
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onError = (err) => {
			// The main Paypal script could not be loaded or something blocked the script from loading
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		}

		let env = 'sandbox'; // you can set this string to 'production'
		let currency = 'USD'; // you can set this string from your props or state
		let total = (this.props.totalPrice === undefined) ||  (this.props.totalPrice === 0)? 1 : this.props.totalPrice;  // this is the total amount (based on currency) to charge
		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

		const client = {
			sandbox:    'ARP1ltQVQpoK3__tZE2AMZoZizAvh45nR4J1sGtRYg0GLJWeXPP1QPccY0Cz4B6zYBQtssT8jPe60JG9',
			production: 'YOUR-PRODUCTION-APP-ID',
		}
		// In order to get production's app-ID, you will have to send your app to Paypal for approval first
		// For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
		//   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
		// Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
		// For production app-ID:
		//   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
    debugger
		// NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}

export default PayPalButton;
