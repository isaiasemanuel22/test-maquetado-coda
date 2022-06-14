import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComponentAnimation } from '../../animations/component.animation';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class SearchNavbarComponent implements OnInit {

  list: any = [{},{},{},{},{},{},];
  isActive = false;
  inputSearch2 = '';
  inputSearch = new FormControl('');
  @Output() changeStatus = new EventEmitter<boolean>();

  constructor(
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadItems(search: string) {
    /* const url = `${environment.baseUrl}search/main?text=${search}`;
    this.http.get(url).subscribe((data: any) => {
      const { response } = data;
      response.map((e: any) => {
        const item = this.addItem(e.type, e.title);
        this.list.push(item);
      });
    }); */
  }

  addItem(type: number, title: string) {
    /* let item;
    switch (+type) {
      case 1: {
        item = { icon: 'article', title, route: '', slug: 'News > Tags' };
        break;
      }
      case 2: {
        item = { icon: 'menu_book', title, route: '', slug: 'Courses > Lists' };
        break;
      }
      case 3: {
        item = { icon: 'article', title, route: '', slug: 'News > Tags' };
        break;
      }
      case 4: {
        item = { icon: 'admin_panel_settings', title, route: '', slug: 'Practitioners' };
        break;
      }
      case 5: {
        item = { icon: 'play_circle_outline', title, route: '', slug: 'Videos' };
        break;
      }
      case 6: {
        item = { icon: 'shopping_cart', title, route: '', slug: 'Store > Category' };
        break;
      }
    }
    return item; */
  }

  loadConfig() {
    /* this.inputSearch.valueChanges.subscribe(query => {
      if (query == '') {
        this.onClose();
      } else {
        this.onOpen();
        this.loadItems(query);
      }
    }); */
  }

  onOpen() {
    this.changeStatus.emit(true);
  }

  onClose() {
    this.changeStatus.emit(false);
    this.inputSearch2 = '';
  }

}
