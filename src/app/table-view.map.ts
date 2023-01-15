import { Observable } from 'rxjs';
import { Album } from './album.interface';
import { TableView } from './table-view.interface';
import { User } from './user.interface';
import { map } from 'rxjs';

export function mapRecords(
  source$: Observable<[Album[], User[]]>
): Observable<TableView[]> {
  return source$.pipe(
    map(([albums, users]) =>
      albums.map((a) => {
        const user = users.find((u) => u.id === a.userId);
        return {
          albumTitle: a.title,
          username: user!.username,
          city: user!.address.city,
          email: user!.email,
        };
      })
    )
  );
}
