import { Component, Input, Output } from '@angular/core';
import { blogPost } from './blog-post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedBlogPost = null;
  title = 'Visit Australia';

  masterBlogPostList: blogPost[] = [
    new blogPost("How to make the most of your 10 days Down Under", "Australia.com", "Experience iconic Australia", "Welcome to sunny . Begin the day with a stroll along the spectacular clifftops between Bondi, Tamarama and Bronte beaches. A round trip should take about 1 1/2 hours. Finish with a dip at the Bondi Icebergs pool or a  at Bondi Beach. You can then sit down for lunch at one of Bondi's many cafes, such as , where you can enjoy a bucket of prawns overlooking the beach. In the afternoon, take the bus up the hill from Bondi Beach to the shopping precinct of Paddington, where you can browse the fashion boutiques of some of Australia's best designers, such as Camilla and Marc, Lee Mathews and Scanlan Theodore. Stop for coffee at  down Glenmore Road.", ["trip ideas", "Sydney and surrounds", "itineraries"], "https://media1.s-nbcnews.com/j/newscms/2017_50/1304474/sydney-today-tease-171215_8883be605784b866806a2874cb2a81e3.today-inline-large2x.jpg"),
    new blogPost("Chris Hemsworth's Australian bucket list", "Allie Metz", "Global ambassador and actor Chris Hemsworth discusses his top 5 Australian experiences.", "The Great Barrier Reef is one of those places you must visit, whether you love the water or just want to see one of the great wonders of the world. We stayed at Hayman Island which was a real highlight… We had an afternoon on Whitehaven Beach which was absolutely stunning. It was the whitest sand and crystal clean water that I'd ever seen, and the Whitsundays is the perfect spot to just unwind and relax.", ["trip ideas", "local knowledge", "things to do", "friends of Australia"], "http://www.starobserver.com.au/wp-content/uploads/2017/08/image-13.jpg"),
    new blogPost("20 must-do activities in Australia", "Kate Cox", "These 20 activites could all be highlights of your trip to Australia. How will you choose which ones to do?", "The Whitsunday Islands offer some of the world's finest sailing, with mostly perfect winds, calm seas, beautiful scenery and 74 islands to hop through (69 of which are uninhabited). It's called bareboating: hiring a boat, stocking it with provisions and friends and sailing off into the sunset. Even if you have no sailing experience, companies such as  will give you a yacht and a safety briefing and then set you free, with the requirement that you respond to their twice-daily radio schedule to say where you are and where you're going. Leave from the coastal town of Airlie Beach or have your vessel delivered to Hamilton or Hayman Island. Prices start at AUD$365 a night for a six-person yacht.", ["trip ideas", "activites", "things to do", "Australian adventure"], "http://www.exploreaustralia.net.au/images/content/rec/91/45791-582ff300.jpg"),
    new blogPost("Guide to the Great Barrier Reef", "Jac Taylor", "Let us inspire you with our guide to things to do on the Great Barrier Reef. Sail the Whitsundays, seaplane over heart reef...", "Home to diverse marine life of the most vivid colours, the Great Barrier Reef offers the opportunity for great adventure, whether you do it in luxury or on a budget. Explore the stunning Whitsunday Islands, trek the ancient Daintree Rainforest or relax on luxurious tropical islands such as Hayman and Lizard. Island-hop or stay in one of the many coastal getaways such as Cairns, Hervey Bay, Mission Beach and Port Douglas.", ["places to go", "cairns and surrounds", "guide", "great barrier reef"], "https://www.businessdestinations.com/wp-content/uploads/2017/02/E011_rt-featured.jpg"),
    new blogPost("Guide to the Sydney", "Ellie Schneider", "Enjoy Sydney's natural beauty from recognisable landmarks like the Harbour Bridge to picturesque beaches and world-class restaurants.", "Enjoy Sydney’s natural beauty, from unspoilt beaches to public gardens and, of course, the sparkling harbour, before discovering its thriving restaurants and markets. Top it off with a trip to the Blue Mountains, a popular excursion among locals.", ["places to go", "cairns and surrounds", "guide", "sydney"], "https://www.sydney.com/sites/sydney/files/styles/grid_layout_full/public/2017-10/harbour_4.jpg?itok=qN3ZyP58"),
    new blogPost("Guide to Perth", "Fleur Bainger", "Discover Perth's city life, from small bars in the urban villages to the historic port town of Fremantle. Perth also has beautiful beaches...", "Nature and urban life exist in harmony in Perth, on Australia's west coast. Here, where the locals soak up more sunny days than in any other Australian capital city, you can visit nearby Rottnest Island, walk in leafy Kings Park and tour Swan Valley vineyards. For local culture, wander the nearby city of Fremantle's winding portside streets and Perth city centre's museum and gallery precinct.", ["places to go", "perth and surrounds", "guide", "perth"], "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_531,c_fill,g_auto,h_299,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F171122145538-perth-kings-park4.jpg")
  ];

  editBlogPost(clickedBlogPost) {
    this.selectedBlogPost = clickedBlogPost;
  }

  finishedEditing() {
    this.selectedBlogPost = null;
  }

  deleteBlogPost() {
    let index = this.masterBlogPostList.indexOf(this.selectedBlogPost);
    this.masterBlogPostList.splice(index, 1);
    this.selectedBlogPost = null;
  }
}
