import { Component, OnInit } from '@angular/core';
import { QueryPostsGQL, QueryPostsQuery } from './services/wordpressGraphQl.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private postsService: QueryPostsGQL) { }

  isCollapsed = false;

  public posts$: any;



  ngOnInit(): void {
    //   this.posts$ = this.postsService.fetch().pipe(
    //     map(
    //       res => res.data.posts?.nodes
    //     ));
    // }
    // log(post): void {
    //   console.log(post);
    // }
  }
}
