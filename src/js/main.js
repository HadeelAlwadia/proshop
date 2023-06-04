// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';


const stud={}
const sucessStud={...stud}


function FailStud(name){
this.name='hadeel'
this.getName=()=>this.name
}


const failedStud=new FailStud() 

class productd{
    constructor(imag,name,salary,discond,url){

    }
    getdetalisAbout(){
        return {imag:this.imag}
    }
}

console.log(this)