import { TestBed } from '@angular/core/testing';

import { ObtenerPersonajeService } from './obtener-personaje.service';

describe('ObtenerPersonajeService', () => {
  let service: ObtenerPersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerPersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
