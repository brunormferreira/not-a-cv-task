import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProfileData } from './profile.model';

const HTTP_DELAY = 1000;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private persistedData: ProfileData = {
    basicInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
    },
    additionalInfo: {
      baseTechnology: 'Angular',
      superhero: 'Batman',
    },
  };

  getData(): Observable<ProfileData> {
    return timer(HTTP_DELAY).pipe(map(() => this.persistedData));
  }

  updateData(data: ProfileData): Observable<ProfileData> {
    this.persistedData = data;

    return this.getData();
  }
}
