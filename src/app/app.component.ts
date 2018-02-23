import { Component, OnDestroy, OnInit } from '@angular/core';
import { StaticLocalizationService } from './shared/static-localization.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private translateSubscription: Subscription;
  public resources: Observable<any>;

  title = 'app';

  constructor(private staticLocalizationService: StaticLocalizationService) {
  }

  ngOnInit() {
    this.resources = this.staticLocalizationService.getTranslatableResources();
  }

  ngOnDestroy() {
  }
}
