import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

//any instance of AlbumDetailComponent will have route/location properties that can be accessed w this.route and this.location.
  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) {}
//loops through and temporarily assigns each item parameter the variable name urlParameters. Uses Fat arrow notation.
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.albumId = urlParameters['id'];
   });
   this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }
//Does not work with familiar/old way of writing .forEach b/c this refers to function itself.
  // ngOnInit() {
  //   this.route.params.forEach(function(urlParameters){
  //    this.albumId = parseInt(urlParameters['id']);
  //  });
  // }

}
