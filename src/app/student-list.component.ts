import {Component} from '@angular/core';

@Component({
    selector:'student-list',
    template: ``

})
export class StudentList{
    studentName=['张三','李四','王五'];

    constructor(){

    }
    onStudentSelected(name:string){
        console.log('选中了学生:' + name);
    }
}