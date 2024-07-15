import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.loading = true;
    this.dataService.getPosts().subscribe(
      data => {
        this.posts = data;
        this.loading = false;
      },
      error => {
        this.error = 'Error fetching posts';
        this.loading = false;
      }
    );
  }
}