import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public artists: ArtistsList[] = [];
  public songs: SongsList[] = [];

  constructor(http: HttpClient) {
    http.get<ArtistsList[]>( environment.baseUrl + 'KpopList/GetArtists').subscribe(result1 => {
      this.artists = result1;
    }, error => console.error(error));
    http.get<SongsList[]>( environment.baseUrl + 'KpopList/GetSongs').subscribe(result2 => {
      this.songs = result2;
    }, error => console.error(error));
  }
}

interface ArtistsList {
  name: string;
}

interface SongsList {
  title: string;
}

