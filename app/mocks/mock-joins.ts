import { Join } from '../models';

export var JOINS: Join[] = [
  new Join({
    "id": 11,
    "guest_id": 12,
    "meeting_id": 13,
    "sub_meeting_id": 14,
    "paid": false,
    "refunded": false,
    "refund_requested": false,
    "meta": {
      "type": "bankbook",
      "amount": 25000,
      "currency": "KRW",
      "info": { "holder": "Kim Jiwon" },
    },
  })
]