import React , { Component } from 'react';
import NewsItem from './NewsItem';

export default class NavBar extends Component {

    articles = [
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Akane Otani",
                "title": "Berkshire Hathaway Boosts Stake in Apple, Paramount Global in Relatively Quiet Quarter",
                "description": "Warren Buffetts conglomerate didnt open new positions in any companies",
                "url": "https://www.wsj.com/articles/berkshire-hathaway-boosts-stake-in-apple-paramount-global-in-relatively-quiet-quarter-dd092f9c?mod=hp_lead_pos12",
                "urlToImage": "https://images.wsj.net/im-723918/social",
                "publishedAt": "2023-02-14T22:55:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": "TG",
                "title": "Berkshire adds new Apple shares, trims BNY Mellon",
                "description": "Warren Buffetts conglomerate didnt open new positions in any companies",
                "url": "https://www.reuters.com/business/buffetts-berkshire-reduces-stake-activision-blizzard-2023-02-14/",
                "urlToImage": "https://www.reuters.com/resizer/S9KAkrsDaPizbHWgjUApg2AKdUg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JYPISFD7EZOFBHNLZZJR7JVKCQ.jpg",
                "publishedAt": "2023-02-14T21:03:31Z",
                "content": "NEW YORK/BANGALORE, Feb 14 (Reuters) - Warren Buffett's Berkshire Hathaway Inc (BRKa.N) increased its bets on Apple Inc (AAPL.O) by over $3 billion in the fourth quarter, while it significantly cut i… [+1316 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Jennifer Pattison Tuohy",
                "title": "TP-Link Tapo P125M review: Matter smart plug reveals cracks in the new smart home standard",
                "description": "The $20 smart Wi-Fi plug works with Amazon Alexa, Apple Home, Google Home, and Samsung SmartThings, thanks to Matter, but using it on all four platforms at once is challenging.",
                "url": "http://www.theverge.com/23599437/tp-link-tapo-p125m-review-matter-apple-amazon-google-smartthings",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/XQUSzbJbJ00lXo1ulnYv2t2uptM=/0x0:2040x1360/1200x628/filters:focal(801x725:802x726)/cdn.vox-cdn.com/uploads/chorus_asset/file/24423304/236527_Matter_smart_plugs_TP_Link_JTuohy_0011.jpg",
                "publishedAt": "2023-02-14T20:30:13Z",
                "content": "The TP-Link Tapo smart plug is one of the first Matter devices. Its fast and easy to use with Apple Home, Google Home, Amazon Alexa, or SmartThings thanks to the new smart home standard. But when it … [+20114 chars]"
            },
            {
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "author": "https://www.engadget.com/about/editors/katie-malone",
                "title": "Update your Apple devices now to patch a security flaw | Engadget",
                "description": "Apple released security updates to its operating systems to fix flaws that hackers may have actively exploited..",
                "url": "https://www.engadget.com/update-your-apple-devices-now-to-patch-a-security-flaw-185718120.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-04/6dfa2270-bb06-11ec-b1a5-2e5a8dcaeb65",
                "publishedAt": "2023-02-14T18:07:18.650464Z",
                "content": "Apple released security updates to its operating systems on Monday to resolve a security flaw. While such updates are common, the company said in the announcement that the issue may have been activel… [+1400 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Nilay Patel",
                "title": "Erase browser history: can AI reset the browser battle?",
                "description": "Mozilla chair Mitchell Baker on competing — and cooperating — with Google, Apple, and the rest of Big Tech for the future of browsers including Firefox and the new developments in AI.",
                "url": "http://www.theverge.com/2023/2/14/23598344/mozilla-firefox-ceo-mitchell-baker-microsoft-edge-bing-google-apple-ai",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/rhqkmzxXTgymRXLDLQ6K4kNFLQw=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24431924/236539_Mitchell_Baker_Mozilla_Foundation_WJoel.jpg",
                "publishedAt": "2023-02-14T16:04:29Z",
                "content": "Mozilla chair Mitchell Baker on competing and cooperating with Google, Apple, and the rest of Big Tech.\r\nByNilay Patel / @reckless\r\nFeb 14, 2023, 4:04 PM UTC|Comments\r\nIf you buy something from a Ver… [+55449 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Wired",
                "title": "Audiobook Narrators Fear Spotify Used Their Voices to Train AI",
                "description": "After a backlash, Spotify has removed a clause that allowed Apple to train machine learning models on some audiobook files.",
                "url": "https://www.wired.com/story/apple-spotify-audiobook-narrators-ai-contract",
                "urlToImage": "https://media.wired.com/photos/63ea9209ec9575838d529923/191:100/w_1280,c_limit/Sec-apple-audio-654716637.jpg",
                "publishedAt": "2023-02-14T16:03:54Z",
                "content": "Starling believes Findaway has misused the material that authors and narrators entrusted it with. This is immoral and illegal, Starling told WIRED, Rights holders have the copyrights for the audioboo… [+3066 chars]"
            },
            {
                "source": {
                    "id": "four-four-two",
                    "name": "FourFourTwo"
                },
                "author": "Ed McCambridge",
                "title": "Ted Lasso series three: Start date, trailer, episode count and storyline released by Apple TV+",
                "description": "Everyone's favourite American soccer coach, Ted Lasso, returns for season three this March",
                "url": "https://www.fourfourtwo.com/news/ted-lasso-series-three-start-date-trailer-episode-count-and-storyline-released-by-apple-tv",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/TWEKCgfDNH2BeqPUYacSgE-1200-80.jpg",
                "publishedAt": "2023-02-14T15:51:07Z",
                "content": "Ted Lasso is set to return to screens in March, with Apple TV+ finally releasing key information about the critically-acclaimed comedy's return. \r\nSeason three of Ted Lasso will kick-off on March 15,… [+1442 chars]"
            },
            {
                "source": {
                    "id": "techradar",
                    "name": "TechRadar"
                },
                "author": "HG",
                "title": "The Mac Mini is now one of Apple's fastest computers and I still can't believe it",
                "description": "A $2,300 mini PC wrecks a three-year-old $15,000 workstation",
                "url": "https://www.techradar.com/opinion/the-new-mac-mini-destroys-the-mac-pro-and-apple-fans-should-be-furious",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZH9K4Fz8kovVvcDw6X9EBi-1200-80.jpg",
                "publishedAt": "2023-02-10T03:50:20Z",
                "content": "Apple's new Mac mini has been turning a lot of heads since its release, and that's not the least bit surprising. \r\nThe Mac mini has always been a popular mini PC and with the introduction of the Appl… [+4496 chars]"
            },
            {
                "source": {
                    "id": "wired-de",
                    "name": "Wired.de"
                },
                "author": "GQ",
                "title": "Apple Neuheiten: Was wir vor der ersten Keynote 2021 wissen!",
                "description": "Bald soll es so weit sein: Bei der ersten Keynote 2021 präsentiert Apple Neues aus Cupertino. Auf diese Produkte dürfen wir uns freuen!",
                "url": "https://www.gq-magazin.de/auto-technik/article/apple-neuheiten-2021-das-wissen-wir-vor-keynote",
                "urlToImage": "https://res.cloudinary.com/wired-de/image/upload/t_teaser_square/v1/0/apple-neuheiten-event-erste-keynote-2021-technik-aufmjpg.jpg",
                "publishedAt": "2021-03-23T17:09:52Z",
                "content": "Auf eines ist im Frühjahr immer Verlass: Apple präsentiert seine (ersten) neuen Produkte. Glauben wir den jüngsten Gerüchten, wird das auch 2021 so sein und dieses Jahr sogar wieder live aus Cupertin… [+2936 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": "GP",
                "title": "Akram's yorkers, Hegg's hits, and Chapple's 6 for 18 | ESPNcricinfo.com",
                "description": "This week, we relive the glorious one-day triumphs of Lancashire in the 1990s | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/29102935/o-my-akram-my-hegg-long-ago",
                "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1221634_1296x729.jpg",
                "publishedAt": "2020-04-27T10:24:08Z",
                "content": "With still no live cricket in sight, we're digging deep into YouTube to keep ourselves entertained. This week, a trip down memory lane with one of the most dominant one-day sides ever - Lancashire in… [+5185 chars]"
            }
    ]

    constructor(){
        super()
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
    render(){
      return(
        <center>
        <h1>Top Headlines today!</h1>
        <div>
           <div className="row my-3">
           {
                this.state.articles.map((article)=>{
                    console.log(article);
                    return(
                        <div className="col-md-4">
                            <NewsItem title={article.title+" BY "+article.author} description={article.description} urlToImage={article.urlToImage} url={article.url}/>
                        </div>
                    )
                })
           }

          
           </div>
        </div>
        </center>
        
      )
    }
}