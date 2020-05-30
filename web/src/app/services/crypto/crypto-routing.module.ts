import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CryptoComponent } from './crypto.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
    { path: 'crypto', component: CryptoComponent },
    { path: 'crypto/files', component: FilesComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CryptoRoutingModule { }
