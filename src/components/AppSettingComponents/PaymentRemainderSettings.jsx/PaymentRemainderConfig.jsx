export const PaymentConfig = {
  buttons: [
    { label: "Pay Now", action: () => console.log("Roll Out"),buttonClass:'buttonStyle' },
    { label: "Hold", action: () => console.log("Hold"),buttonClass:'buttonStyle' }
  ]
};

export const config=[
  {
    name: "name",
    label: "",
    type: "text",
    placeholder: "ADD Remainder Payment  + ",
    textcss: "paymentsettingtext",
    // required: true
  },
]
export const TextComponentData4 = [

  {
    name: 'enable',
    placeholder: '',
    textcss: 'holidaytablerow',
  },


];
export const ToggleConfig = [

  {
    name: 'payment_type',
    label:'Set Payment Type',
    placeholder: '',
    options: [
      { name: "recurring", value: "Recurring" },
      { name: "onetime", value: "One Time" },
    ],
  },


];