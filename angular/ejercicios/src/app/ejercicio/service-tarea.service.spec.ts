import { TestBed } from '@angular/core/testing';

import { ServiceTareaService } from './service-tarea.service';

describe('ServiceTareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTareaService = TestBed.get(ServiceTareaService);
    expect(service).toBeTruthy();
  });
});
