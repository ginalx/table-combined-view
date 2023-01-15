import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { UserService } from './user.service';
import { AlbumService } from './album.service';
import { mapRecords } from './table-view.map';
import { TableColumn } from './table-view.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly columns: TableColumn[] = [
    { field: 'albumTitle', header: 'Album Title' },
    { field: 'username', header: 'Username' },
    { field: 'city', header: 'City' },
    { field: 'email', header: 'Email' },
  ];
  readonly data$ = combineLatest([
    this.albumService.get$(),
    this.userService.get$(),
  ]).pipe(mapRecords);

  constructor(
    private readonly userService: UserService,
    private readonly albumService: AlbumService
  ) {}
}
