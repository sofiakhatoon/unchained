import { Component, OnInit, ElementRef } from "@angular/core";
import { Fixture } from "../models/fixture";
import { formatDate, DatePipe } from "@angular/common";
import { element } from "@angular/core/src/render3";
import { Router } from "@angular/router";
import { RouterService } from "../services/router.service";
import { MatchesService } from "../services/matches.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fixture",
  templateUrl: "./fixture.component.html",
  styleUrls: ["./fixture.component.css"],
  providers: [RouterService]
})
export class FixtureComponent implements OnInit {
  items: Fixture[] = [];
  littleItem: Fixture[] = [];
  sliceStart: number = 0;
  sliceEnd: number;
  direScore: number = -1;
  radiantScore: number = -1;
  radiantTeam: string = "NULL-";
  direTeam: string = "NULL-";
  direTag: string;
  radiantTag: string;
  url: string;
  direIconPath: string;
  radiantIconPath: string;
  result: string;
  resultColorStyle: string;
  radiantWin: boolean;
  radiant: boolean;

  spanpositiondiv: HTMLElement;

  constructor(
    private routerService: RouterService,
    private matchesService: MatchesService,
    private httpClient: HttpClient,
    private mydoc: ElementRef
  ) {
    this.resizeFixture();
    this.matchesService.getAllMatches().subscribe(data => {
      for (let dataitem of data) {
        this.matchesService.getMatchesById(dataitem.match_id).subscribe(x => {
          this.radiant = dataitem.radiant;
          this.radiantWin = dataitem.radiant_win;

          if (this.radiant && this.radiantWin) {
            this.result = "<span style='color:#0cb80c'>Won Match</span>";
          }
          if (this.radiant && !this.radiantWin) {
            this.result = "<span style='color:#a04f4f'>Lost Match</span>";
          }
          if (!this.radiant && !this.radiantWin) {
            this.result = "<span style='color:#0cb80c'>Won Match</span>";
          }
          if (!this.radiant && this.radiantWin) {
            this.result = "<span style='color:#a04f4f'>Lost Match</span>";
          }

          //console.log(x);
          this.radiantScore = x.radiant_score;
          this.direScore = x.dire_score;
          this.direTeam = x.dire_team.name;
          this.radiantTeam = x.radiant_team.name;

          this.radiantIconPath = x.radiant_team.logo_url;

          this.direIconPath = x.dire_team.logo_url;
          this.radiantWin = x.radiant_win;
          this.radiant = x.radiant;

          this.radiantTag = x.radiant_team.tag;
          this.direTag = x.dire_team.tag;

         
            if (this.radiantTag.toLocaleLowerCase().includes("unc")) {
              this.radiantIconPath = "../assets/img/logo.png";
            } else if (this.direTag.toLocaleLowerCase().includes("unc")) {
              this.direIconPath = "../assets/img/logo.png";
            }
         

          const item: Fixture = {
            matchid: x.match_id,
            radiantTeam: this.radiantTeam,
            direTeam: this.direTeam,
            direTag: this.direTag,
            radiantTag: this.radiantTag,
            radiantScore: this.radiantScore,
            direScore: this.direScore,
            timestamp: dataitem.start_time,
            radiantIconPath: this.radiantIconPath,
            direIconPath: this.direIconPath,
            game: 0,
            resultStyle: this.resultColorStyle,
            result: this.result
          };
          this.items.push(item);
          //order by desc by datetime
          this.items.sort((val1, val2) => {
            return (
              <any>new Date(val2.timestamp) - <any>new Date(val1.timestamp)
            );
          });

          //-----
          //console.log(x);
        });
      }
      //console.log(data);
    });
  }

  ngOnInit() {}
  resizeFixture() {
    this.routerService.getNavigationEndUrl().subscribe(x => {
      this.url = x.url;
      if (
        x.url.toLocaleLowerCase().includes("/home") ||
        x.url.toLocaleLowerCase() == "/"
      ) {
        this.sliceEnd = 50;
      } else {
        this.sliceEnd = 500;
        let fixturecard: HTMLElement = this.mydoc.nativeElement.querySelector(
          ".card"
        );
        fixturecard.classList.add("container");
        let footer: HTMLElement = this.mydoc.nativeElement.querySelector(
          ".card-footer"
        );
        footer.style.display = "none";
      }
    });
  }
}
