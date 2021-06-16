export class Responsable{
    public id!: string;
   public firstName!: string;
   public lastName!: string;
   public email!: string;
   public login!: string;
   public password!: string;
  
    Responsable(iid: string, firstN: string, lastN: string, mail: string, log: string, pwd: string){
        this.id=iid;
        this.firstName=firstN;
        this.lastName=lastN;
        this.email=mail;
        this.login=log;
        this.password=pwd;
    }
    public getId(): string{
        return this.id;
    }
    public setId(iid:string){
        this.id=iid;
    }
}