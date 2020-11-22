import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
