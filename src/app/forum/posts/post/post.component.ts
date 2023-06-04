import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { POST } from '../../posts.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  loadedPosts: POST[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts()
  }

  onCreatePost(postData: POST) {
    // Send Http request
    this.http
      .post<{ name: string }>(
        'https://football-bb769-default-rtdb.firebaseio.com/Country/Club/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: POST }>(
        'https://football-bb769-default-rtdb.firebaseio.com/Country/Club/posts.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: POST[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }
}
