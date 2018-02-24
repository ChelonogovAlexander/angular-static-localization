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
  private resourcesSubscription: Subscription;
  public resources: Resourses;

  title = 'app';

  constructor(private staticLocalizationService: StaticLocalizationService) {
  }

  ngOnInit() {
    this.staticLocalizationService.getTranslatableResources().subscribe(r => this.resources = r);
  }

  ngOnDestroy() {
    this.resourcesSubscription.unsubscribe();
  }
}
