import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HomeContainerComponent } from "./home-container/home-container.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomeContainerComponent
        ],
    imports: [
        MatSidenavModule,
        RouterModule,
        CommonModule,
    ],
    exports: [
        HomeContainerComponent
    ]
})
export class ContainerModule {}