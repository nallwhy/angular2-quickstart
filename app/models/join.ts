export class Join {
  constructor(
    public id: number,
    public guest_id: number,
    public meeting_id: number,
    public sub_meeting_id: number,
    public payment_info: Object
  ) {}
}