import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSongComponent } from './artist-song.component';

describe('ArtistSongComponent', () => {
  let component: ArtistSongComponent;
  let fixture: ComponentFixture<ArtistSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
