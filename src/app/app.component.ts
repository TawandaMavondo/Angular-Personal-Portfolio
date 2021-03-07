import { Component, OnInit } from '@angular/core';
import { QueryPostsGQL } from './services/wordpressGraphQl.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCollapsed = false;

  constructor(private postsService: QueryPostsGQL) { }

  public posts$;
  ngOnInit(): void {
    this.posts$ = this.postsService.fetch().pipe(
      map(
        res => res.data.posts
      ));
    // console.log(this.posts$)
    console.log('init');
  }
  log(post): void {
    console.log(post);
  }
}
