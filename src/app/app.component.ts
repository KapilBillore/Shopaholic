import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFeature : String = 'Product';

  title = 'Shopaholic';

  onNavigate(feature:String)
  {
    this.selectedFeature=feature;
    console.log("Calling navigate method! The selected feature is "+this.selectedFeature);
  }
}
