class familyBelcher {
    constructor(fname){
        this.firstName = fname;
 }
  get name() {
    return (this.firstName);
  }

}
const mom = new familyBelcher ("Linda");