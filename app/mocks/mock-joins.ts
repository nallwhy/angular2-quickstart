import { Join } from '../models/join';

export var JOINS: Join[] = [
  new Join(11, 12, 13, 14, {
    "type":"bankbook",
    "amount":25000,
    "currency":"KRW",
    "info":{ "holder":"Kim Jiwon"},
    "paid":false,
    "refunded":false,
    "refund_requested":false
  })
]