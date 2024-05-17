import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeAboutComponent } from "./home-about/home-about.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
        HomeAboutComponent
    ],
    imports: [HomeRoutingModule],
    exports: [],
})
export class HomeModule {}