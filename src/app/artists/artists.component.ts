import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Artist } from './Artist';

@Component({
  selector: 'app-countries',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.components.css']
})
export class ArtistsComponent implements OnInit {
  public artists!: Artist[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let url = environment.baseUrl + 'api/KpopList/Artists';
    this.http.get<Artist[]>(url).subscribe((result: Artist[]) => {
      this.artists = result;
    });
  }

}
