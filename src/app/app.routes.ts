import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'todo',
        component:TodoComponent,
        title:'todo'
    }

];
