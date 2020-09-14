import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  listId: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.listId = params['listId'];
        console.log(this.listId)

      }
    )
  }


  createTask(title: string){
    this.taskService.createTask(title, this.listId).subscribe((newtask: Task) =>{
      console.log(newtask);

      this.router.navigate(['../'], { relativeTo: this.route });
      
      //Now we navigate to /lists/response._id
      

    });
  }

}
