import { Component } from '@angular/core';
import { blogPost } from './blog-post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Visit Australia';

  masterBlogPostList: blogPost[] = [
    new blogPost("How to make the most of your 10 days Down Under", "Australia.com", "Welcome to sunny . Begin the day with a stroll along the spectacular clifftops between Bondi, Tamarama and Bronte beaches. A round trip should take about 1 1/2 hours. Finish with a dip at the Bondi Icebergs pool or a  at Bondi Beach. You can then sit down for lunch at one of Bondi's many cafes, such as , where you can enjoy a bucket of prawns overlooking the beach. In the afternoon, take the bus up the hill from Bondi Beach to the shopping precinct of Paddington, where you can browse the fashion boutiques of some of Australia's best designers, such as Camilla and Marc, Lee Mathews and Scanlan Theodore. Stop for coffee at  down Glenmore Road.", ["trip ideas", "Sydney and surrounds", "itineraries"], "https://media1.s-nbcnews.com/j/newscms/2017_50/1304474/sydney-today-tease-171215_8883be605784b866806a2874cb2a81e3.today-inline-large2x.jpg"),
