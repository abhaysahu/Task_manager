import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  selectedListId: string;
  listId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.listId = params.listId;
      }
    )
  }

  updateList(title: string) {
    this.taskService.updateList(this.listId, title).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/lists', this.listId])
    })
  }

}
