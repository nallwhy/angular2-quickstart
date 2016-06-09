export class User {
  id: number;
  email: string;
  meta: Object;

  constructor(obj: any) {
    this.id = obj.id;
    this.email = obj.email;
    this.meta = obj.meta;
  }

  get name() { return this.meta['name']; }
  get gender() { return this.meta['gender']; }
  get phone() { return this.meta['phone']; }
  get birthday() { return this.meta['birthday']; }
  get nationality() { return this.meta['nationality']; }
  get job() { return this.meta['job']; }
  get description() { return this.meta['description']; }
}

export class Meeting {
  id: number;
  host_id: number;
  name: string;
  sub_name: string;
  meta: Object;;

  constructor(obj: any) {
    this.id = obj.id;
    this.host_id = obj.host_id;
    this.name = obj.name;
    this.sub_name = obj.sub_name;
    this.meta = obj.meta;
  }
}

export class SubMeeting {
  id: number;
  meeting_id: number;
  date: Date;

  constructor(obj: any) {
    this.id = obj.id;
    this.meeting_id = obj.meeting_id;
    this.date = new Date(obj.date);
  }
}

export class Join {
  id: number;
  guest_id: number;
  meeting_id: number;
  sub_meeting_id: number;
  guest: User;
  meeting: Meeting;
  sub_meeting: SubMeeting;
  paid: boolean;
  refunded: boolean;
  refund_requested: boolean;
  payment_info: { info };

  constructor(obj: any) {
    this.id = obj.id;
    this.guest_id = obj.guest_id;
    this.meeting_id = obj.meeting_id;
    this.sub_meeting_id = obj.sub_meeting_id;
    this.guest = new User(obj.guest);
    this.meeting = new Meeting(obj.meeting);
    this.sub_meeting = new SubMeeting(obj.sub_meeting);
    this.paid = obj.paid;
    this.refunded = obj.refunded;
    this.refund_requested = obj.refund_requested;
    this.payment_info = obj.payment_info;
  }
}