import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ArtistSong } from './Artist';

@Component({
  selector: 'app-country-population',
  templateUrl: './artist-song.component.html',
  styleUrls: ['./artist-song.component.css']
})
export class ArtistSongComponent implements OnInit {
  id?:number;
  artistSong!: ArtistSong;
  songList: undefined;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;
    let url = `${environment.baseUrl}api/KpopList/ArtistSong/${this.id}`;
    this.http.get<ArtistSong>(url).subscribe((result: ArtistSong) => {
      this.artistSong = result;
    });
  }

}
