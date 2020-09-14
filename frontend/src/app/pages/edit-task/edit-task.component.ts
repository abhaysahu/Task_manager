import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})

export class EditTaskComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  selectedListId: string;
  listId: string;
  taskId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.listId = params.listId;
        this.taskId = params.taskId;
      }
    )
  }


  updateTask(title: string) {
    
    this.taskService.updateTask(this.listId, this.taskId, title).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/lists', this.listId])
    })
  }

}
