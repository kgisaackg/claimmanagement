export class Claims {
    id: String;
    claimNum: String;
    claimDate: String;
    message: String;
    status: String;

    constructor(id, claimNum, claimDate, message, status) {
        this.id = id;
        this.claimNum = claimNum;
        this.claimDate = claimDate;
        this.message = message;
        this.status = status;
    }
}

