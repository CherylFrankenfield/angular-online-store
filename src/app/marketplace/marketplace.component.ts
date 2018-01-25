import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
  // albums: Album[];
  albums: FirebaseListObservable<any[]>;
//private Router object named router. This ensures that every instance of MarketplaceComponent has a Router object available when it is instantiated. this ensures all new instances of MarketplaceComponent also have an instance of AlbumService, accessible by calling this.albumService
  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
    console.log(this.router.url);
  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };

}
