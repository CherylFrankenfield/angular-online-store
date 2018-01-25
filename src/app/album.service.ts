import { Injectable } from '@angular/core';
import { Album } from './album.model';
// import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums(){
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }
//service may provide this information wherever it's injected
  // getAlbums() {
  //   return ALBUMS;
  // }
//returns specific album
  getAlbumById(albumId: string){
    return this.database.object('albums/' + albumId);
  }

}
