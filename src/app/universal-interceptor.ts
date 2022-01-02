import {
    Injectable,
    Inject,
    Optional
 } from '@angular/core';
 import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
 } from '@angular/common/http';
 import {
    Request
 } from 'express';
 import {
    REQUEST
 } from '@nguniversal/express-engine/tokens';
import { environment } from 'src/environments/environment';
 
 
 @Injectable()
 export class UniversalInterceptor implements HttpInterceptor {
 
    constructor(@Optional() @Inject(REQUEST) protected request: Request) {}
 
    intercept(req: HttpRequest<any>, next: HttpHandler) {
       let serverReq: HttpRequest<any> = req;
       if (this.request) {
          let newUrl = environment.url;
          if (!req.url.startsWith('/')) {
             newUrl += '/';
          }
          newUrl += req.url;
          serverReq = req.clone({
             url: newUrl
          });
       }
       return next.handle(serverReq);
    }
 }