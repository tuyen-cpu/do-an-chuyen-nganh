import { HeaderComponent } from './../components/header/header.component';
import { UserService } from './../user.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    //providers này thì k quan tâm tạo bn instance
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            // providers này tạo 1 instance cho toàn bộ app
            providers: [UserService],
        };
    }
}
//dang import header
