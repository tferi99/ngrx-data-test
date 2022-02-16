import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {User} from './user/model';

const data: Record<string, User> = {
  '0': {id: 0, name: 'John Smith', email: 'js@test.org', birth: new Date(), counter: 1},
  '1': {id: 1, name: 'Jane Doe', email: 'jd@test.org', birth: new Date(), counter: 5},
  '2': {id: 2, name: 'Remote', email: 'r@test.org', birth: new Date(), counter: 6},
};

@Injectable({
  providedIn: 'root',
})
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, body } = req;

    let storyId: string | undefined;

    if (req.method === 'GET' && req.url.includes('user')) {
      return of(new HttpResponse({ status: 200, body: Object.values(data)}));
    }

    switch (req.method) {
      case 'GET':
        storyId = url.split('/').pop();

        if (!storyId) {
          return throwError(new HttpErrorResponse({ status: 400 }));
        }

        const obj = data[storyId];
        if (obj) {
          return of(new HttpResponse({ status: 200, body: obj }));
        }

        return throwError(new HttpErrorResponse({ status: 404 }));

      default:
        return throwError(new HttpErrorResponse({ status: 501 }));
    }
  }
}
