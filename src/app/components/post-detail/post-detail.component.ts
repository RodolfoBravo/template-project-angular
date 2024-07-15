import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {
  post: any;
  loading: boolean = false;
  error: string = '';

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.fetchPost();
  }

  fetchPost(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.loading = true;
      this.dataService.getPostById(postId).subscribe(
        data => {
          this.post = data;
          this.loading = false;
        },
        error => {
          this.error = 'Error fetching post';
          this.loading = false;
        }
      );
    }
  }
}
