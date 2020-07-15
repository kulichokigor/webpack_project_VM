class AppService{
    constructor(title){
        this.title = title;
    }
    testFunc(){
        console.log('Title text:', this.title)
    }
}

export default AppService