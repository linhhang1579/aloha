import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { LoadingScreenService } from '../../core/services/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  loading = false;
  loadingSubscription: Subscription;

  constructor(private loadingScreenService: LoadingScreenService) {
  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingScreenService.loadingStatus$.asObservable().pipe(
      debounceTime(200)
    ).subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
