export const PaystackConfig = {
    reference: (new Date()).getTime().toString(),
    email: 'balogun.abiodunlive@gmail.com',
    amount: 3786500,
    publicKey: 'pk_test_21f13d496410daba58fa477b669eaed24ce5add3',
};

export const FlutterwaveConfig = {
    public_key: 'FLWPUBK_TEST-eb15fd600d7c60ee7cd0c8626c68845d-X',
    tx_ref: (new Date()).getTime().toString(),
    amount: 3786500,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    }
  };