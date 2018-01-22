import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId: number = null;

//any instance of AlbumDetailComponent will have route/location properties that can be accessed w this.route and this.location.
  constructor(private route: ActivatedRoute, private location: Location) {}
//loops through and temporarily assigns each item parameter the variable name urlParameters. Uses Fat arrow notation.
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
  }
//Does not work with familiar/old way of writing .forEach b/c this refers to function itself.
  // ngOnInit() {
  //   this.route.params.forEach(function(urlParameters){
  //    this.albumId = parseInt(urlParameters['id']);
  //  });
  // }

}
