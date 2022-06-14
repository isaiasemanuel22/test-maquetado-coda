import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isLogged = false;
  scrolled: boolean = false;
  @Input() isSidebarOpen: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  constructor(
    public dialog: MatDialog,
    protected navigator: Router,
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

  loadConfig() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSidebarOpen = false;
        }
      });
  }

  onClickLogout() {
    /* this.authService.logOut();
    this.navigator.navigateByUrl('/'); */
  }

  sidebarCloseMobile() {
    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      this.isSidebarOpen = false;
    }
  }

  languageCurrencyButton() {
    /* this.dialog.open(LanguageCurrencyModalComponent, {
      width: '640px',
      panelClass: ['modal-language-currency'],
    }); */
  }

}
