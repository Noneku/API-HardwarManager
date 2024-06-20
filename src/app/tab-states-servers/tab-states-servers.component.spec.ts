import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStatesServersComponent } from './tab-states-servers.component';

describe('TabStatesServersComponent', () => {
  let component: TabStatesServersComponent;
  let fixture: ComponentFixture<TabStatesServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabStatesServersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStatesServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
