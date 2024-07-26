import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpokemonComponent } from './searchpokemon.component';

describe('SearchpokemonComponent', () => {
  let component: SearchpokemonComponent;
  let fixture: ComponentFixture<SearchpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchpokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
